import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Property } from "@/data/properties";
import { API_BASE_URL } from "@/config";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().optional(),
  numberOfRooms: z.coerce
    .number()
    .min(1, "At least 1 room is required")
    .optional()
    .nullable(),
  numberOfGuests: z.coerce
    .number()
    .min(1, "At least 1 guest is required")
    .optional()
    .nullable(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: Property;
  checkIn?: Date;
  checkOut?: Date;
  initialGuests?: number;
  initialRooms?: number;
}

export const InquiryForm = ({
  open,
  onOpenChange,
  property,
  checkIn,
  checkOut,
  initialGuests,
  initialRooms,
}: InquiryFormProps) => {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      numberOfRooms: initialRooms || undefined,
      numberOfGuests: initialGuests || undefined,
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    try {
      const response = await fetch(`${API_BASE_URL}/inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyId: property.id,
          propertyName: property.title,
          propertyLocation: property.location,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          checkIn: checkIn ? checkIn.toISOString().split("T")[0] : null,
          checkOut: checkOut ? checkOut.toISOString().split("T")[0] : null,
          numberOfRooms: data.numberOfRooms,
          numberOfGuests: data.numberOfGuests,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to submit inquiry");
      }

      setIsSuccess(true);
      reset();
    } catch (error: unknown) {
      let errorMessage =
        "Could not connect to the server. Please try again later.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onOpenChange(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-green-600"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">
                Inquiry Sent Successfully!
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                We've received your inquiry for{" "}
                <span className="font-semibold text-foreground">
                  {property.title}
                </span>
                .
              </p>
              <p className="text-muted-foreground">
                Our team will review your request and contact you shortly.
              </p>
            </div>
            <Button
              onClick={handleClose}
              className="min-w-[200px] bg-green-600 hover:bg-green-700 text-white mt-4"
              size="lg"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Send an Inquiry</DialogTitle>
              <DialogDescription>
                Request more information about {property.title}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="bg-muted p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Property Details</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Property:</span>{" "}
                    <span className="font-medium">{property.title}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location:</span>{" "}
                    <span className="font-medium">{property.location}</span>
                  </div>
                  {checkIn && (
                    <div>
                      <span className="text-muted-foreground">Check-in:</span>{" "}
                      <span className="font-medium">
                        {checkIn.toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  {checkOut && (
                    <div>
                      <span className="text-muted-foreground">Check-out:</span>{" "}
                      <span className="font-medium">
                        {checkOut.toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+91 1234567890"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="numberOfRooms">Number of Rooms</Label>
                  <Input
                    id="numberOfRooms"
                    type="number"
                    min="1"
                    {...register("numberOfRooms")}
                    placeholder="e.g., 2"
                  />
                  {errors.numberOfRooms && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.numberOfRooms.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="numberOfGuests">Number of Adults</Label>
                  <Input
                    id="numberOfGuests"
                    type="number"
                    min="1"
                    {...register("numberOfGuests")}
                    placeholder="e.g., 4"
                  />
                  {errors.numberOfGuests && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.numberOfGuests.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell us about your requirements, special requests, or any questions..."
                  rows={5}
                />
              </div>

              <div className="flex gap-3 justify-end pt-4">
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
