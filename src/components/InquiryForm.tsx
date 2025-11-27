import { useState } from "react";
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

interface InquiryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: Property;
  checkIn?: Date;
  checkOut?: Date;
}

export const InquiryForm = ({
  open,
  onOpenChange,
  property,
  checkIn,
  checkOut,
}: InquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    numberOfRooms: "",
    numberOfGuests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields (Name, Email, Phone).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001'}/api/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId: property.id,
          propertyName: property.title,
          propertyLocation: property.location,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          checkIn: checkIn ? checkIn.toISOString().split('T')[0] : null,
          checkOut: checkOut ? checkOut.toISOString().split('T')[0] : null,
          numberOfRooms: formData.numberOfRooms ? parseInt(formData.numberOfRooms) : null,
          numberOfGuests: formData.numberOfGuests ? parseInt(formData.numberOfGuests) : null,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to submit inquiry');
      }

      toast({
        title: 'Inquiry Sent Successfully!',
        description: `We've received your inquiry for ${property.title}. Our team will contact you shortly.`,
      });
      setFormData({ name: '', email: '', phone: '', message: '', numberOfRooms: '', numberOfGuests: '' });
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: 'Submission Failed',
        description: error.message || 'Could not connect to the server. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Send an Inquiry</DialogTitle>
          <DialogDescription>
            Request more information about {property.title}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
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
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 1234567890"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="numberOfRooms">Number of Rooms</Label>
              <Input
                id="numberOfRooms"
                type="number"
                min="1"
                value={formData.numberOfRooms}
                onChange={(e) => handleChange("numberOfRooms", e.target.value)}
                placeholder="e.g., 2"
              />
            </div>
            <div>
              <Label htmlFor="numberOfGuests">Number of Guests</Label>
              <Input
                id="numberOfGuests"
                type="number"
                min="1"
                value={formData.numberOfGuests}
                onChange={(e) => handleChange("numberOfGuests", e.target.value)}
                placeholder="e.g., 4"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your requirements, special requests, or any questions..."
              rows={5}
            />
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

