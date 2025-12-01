import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Upload, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PropertyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditMode = !!id;

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    price: "",
    priceMin: "" as any,
    priceMax: "" as any,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    destination: "pondicherry",
    tier: "Budget",
    image: "",
    images: [] as string[],
    features: [] as string[],
    rating: 4.5,
    wifi: false,
    pool: false,
    restaurant: false,
    parking: false,
    spa: false,
    beachAccess: false,
  });

  useEffect(() => {
    if (isEditMode) {
      fetchProperty();
    }
  }, [id]);

  const fetchProperty = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/properties/${id}`);
      if (!response.ok) throw new Error("Failed to fetch property");
      const data = await response.json();
      setFormData({
        ...data,
        features: Array.isArray(data.features) ? data.features : [],
        images: data.images || [],
        wifi: data.wifi || false,
        pool: data.pool || false,
        restaurant: data.restaurant || false,
        parking: data.parking || false,
        spa: data.spa || false,
        beachAccess: data.beachAccess || false,
      });
    } catch (error) {
      console.error("Error fetching property:", error);
      toast({
        title: "Error",
        description: "Failed to load property details.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    e.target.value = '';

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    // Try common unsigned preset names
    formDataUpload.append("upload_preset", "travel_stays");

    try {
      setUploading(true);
      // Try unsigned upload endpoint
      const res = await fetch("https://api.cloudinary.com/v1_1/drauz5jps/image/upload", {
        method: "POST",
        body: formDataUpload,
      });
      
      const fileData = await res.json();
      
      // Check if there's an error in the response
      if (fileData.error) {
        throw new Error(fileData.error.message || "Upload failed");
      }
      
      if (fileData.secure_url) {
        const newImages = [...formData.images, fileData.secure_url];
        setFormData((prev) => ({
          ...prev,
          image: prev.image || fileData.secure_url,
          images: newImages,
        }));
        toast({
          title: "Success",
          description: "Image uploaded successfully.",
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        title: "Error",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.image) {
      toast({
        title: "Error",
        description: "Please upload at least one image.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const url = isEditMode
        ? `${API_BASE_URL}/properties/${id}`
        : `${API_BASE_URL}/properties`;
      const method = isEditMode ? "PUT" : "POST";

      const submitData = {
        ...formData,
        collection: "signature",
        amenities: formData.features,
      };

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || "Failed to save property");
      }

      toast({
        title: "Success",
        description: `Property ${isEditMode ? "updated" : "created"} successfully.`,
      });
      navigate("/admin/properties");
    } catch (error: any) {
      console.error("Error saving property:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to save property.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => {
      const newImages = prev.images.filter((_, i) => i !== index);
      return {
        ...prev,
        images: newImages,
        image: index === 0 && newImages.length > 0 ? newImages[0] : prev.image,
      };
    });
  };

  if (loading && isEditMode) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          {isEditMode ? "Edit Property" : "Add New Property"}
        </h2>
        <p className="text-muted-foreground mt-2">
          Fill in the essential details to {isEditMode ? "update" : "create"} a property.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <h3 className="font-semibold text-lg">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Property Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., La Villa"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Pondicherry, India"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Brief description of the property"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <h3 className="font-semibold text-lg">Pricing & Details</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Display Price</Label>
                <Input
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="₹9,000 - ₹14,000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priceMin">Min Price *</Label>
                <Input
                  id="priceMin"
                  name="priceMin"
                  type="number"
                  value={formData.priceMin}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 9000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priceMax">Max Price *</Label>
                <Input
                  id="priceMax"
                  name="priceMax"
                  type="number"
                  value={formData.priceMax}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 14000"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input
                  id="bedrooms"
                  name="bedrooms"
                  type="number"
                  value={formData.bedrooms}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input
                  id="bathrooms"
                  name="bathrooms"
                  type="number"
                  value={formData.bathrooms}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Guests</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  value={formData.guests}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <h3 className="font-semibold text-lg">Categorization</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Destination *</Label>
                <Select
                  value={formData.destination}
                  onValueChange={(val) => handleSelectChange("destination", val)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pondicherry">Pondicherry</SelectItem>
                    <SelectItem value="madurai">Madurai</SelectItem>
                    <SelectItem value="trichy">Trichy</SelectItem>
                    <SelectItem value="varkala">Varkala</SelectItem>
                    <SelectItem value="kovalam">Kovalam</SelectItem>
                    <SelectItem value="kanyakumari">Kanyakumari</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Tier</Label>
                <Select
                  value={formData.tier}
                  onValueChange={(val) => handleSelectChange("tier", val)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Budget">Budget</SelectItem>
                    <SelectItem value="Premium">Premium</SelectItem>
                    <SelectItem value="Luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Features & Amenities</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="wifi"
                    checked={formData.wifi}
                    onChange={(e) => setFormData(prev => ({ ...prev, wifi: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="wifi" className="font-normal cursor-pointer">Wi-Fi</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="pool"
                    checked={formData.pool}
                    onChange={(e) => setFormData(prev => ({ ...prev, pool: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="pool" className="font-normal cursor-pointer">Pool</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="restaurant"
                    checked={formData.restaurant}
                    onChange={(e) => setFormData(prev => ({ ...prev, restaurant: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="restaurant" className="font-normal cursor-pointer">Restaurant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="parking"
                    checked={formData.parking}
                    onChange={(e) => setFormData(prev => ({ ...prev, parking: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="parking" className="font-normal cursor-pointer">Parking</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="spa"
                    checked={formData.spa}
                    onChange={(e) => setFormData(prev => ({ ...prev, spa: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="spa" className="font-normal cursor-pointer">Spa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="beachAccess"
                    checked={formData.beachAccess}
                    onChange={(e) => setFormData(prev => ({ ...prev, beachAccess: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="beachAccess" className="font-normal cursor-pointer">Beach Access</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <h3 className="font-semibold text-lg">Images *</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                  id="image-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  disabled={uploading}
                  onClick={() => document.getElementById("image-upload")?.click()}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Image
                    </>
                  )}
                </Button>
                <span className="text-sm text-muted-foreground">
                  {formData.images.length} image(s) uploaded
                </span>
              </div>

              {formData.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.images.map((img, index) => (
                    <div key={index} className="relative group aspect-video rounded-md overflow-hidden border">
                      <img
                        src={img}
                        alt={`Property ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                      {index === 0 && (
                        <div className="absolute bottom-1 left-1 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                          Main
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/properties")}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={loading || uploading}>
            {loading && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
            {isEditMode ? "Update Property" : "Create Property"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
