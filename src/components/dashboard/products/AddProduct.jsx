import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "src/components/form";
import registerProduct from "src/lib/api/registerProduct";
import { Input, TextArea, Button, Dropzone } from "src/components/shared";
import { Avatar } from "@radix-ui/themes";
import toast from "react-hot-toast";

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    discount: "",
    stock: "",
    threshold: "",
    image: "",
    url: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageDrop = (files) => {
    setFormData((prevData) => ({
      ...prevData,
      image: files[0],
    }));
  };

  const addProduct = async (e) => {
    e.preventDefault();

    const { name, category, price, stock, image } = formData;

    try {
      const data = await registerProduct({
        name,
        category,
        price,
        stock,
        image,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setFormData({});
          toast.success("Product registered");
          navigate("/products")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-xl">Add New Product</h2>
      <Form onSubmit={addProduct}>
        <div className="flex gap-10 justify-center">
          <section className="flex flex-col gap-8 w-[39rem] bg-white border rounded-2xl mt-8 px-6 pt-8 pb-20 shadow-md">
            <h2 className="text-2xl font-medium mb-6">Add Product</h2>
            <div className="flex gap-4">
              <Input
                name="name"
                id="name"
                type="text"
                label="Product Name"
                value={formData.name}
                onChangeHandler={handleInputChange}
                labelClass="mb-1 font-medium"
                className="w-[17.5rem]"
              />
              <Input
                id="catgeory"
                name="category"
                type="text"
                value={formData.category}
                onChangeHandler={handleInputChange}
                label="Category"
                labelClass="mb-1 font-medium"
                className="w-[17.5rem]"
              />
            </div>

            <TextArea
              id="description"
              name="description"
              value={formData.description}
              onChangeHandler={handleInputChange}
              label="Product Description"
              rows={4}
              labelClass="mb-1 font-medium"
            />

            <div className="flex gap-4">
              <Input
                id="price"
                name="price"
                value={formData.price}
                type="number"
                onChangeHandler={handleInputChange}
                label="Price"
                labelClass="mb-1 font-medium"
                className="w-[17.5rem] pl"
                placeholder="#"
              />
              <Input
                id="discount"
                name="discount"
                type="number"
                value={formData.discount}
                onChangeHandler={handleInputChange}
                label="Discount"
                labelClass="mb-1 font-medium"
                className="w-[17.5rem]"
              />
            </div>
            <div className="flex gap-4">
              <Input
                id="stock"
                name="stock"
                type="number"
                value={formData.stock}
                onChangeHandler={handleInputChange}
                label="Stock"
                labelClass="mb-1 font-medium"
                className="w-[17.5rem]"
              />
              <Input
                id="threshold"
                name="threshold"
                value={formData.threshold}
                onChangeHandler={handleInputChange}
                label="Threshold Value"
                labelClass="mb-1 font-medium"
                className="w-[17.5rem]"
              />
            </div>
          </section>

          <section className="flex flex-col gap-8 w-[30rem] bg-white border rounded-2xl mt-8 px-6 pt-8 pb-20 shadow-md">
            <h2 className="text-2xl font-medium">Product Image</h2>

            <Dropzone onDrop={handleImageDrop} />

            <div className="preview flex gap-6 items-center">
              <p className="font-medium">Preview:</p>
              {formData.image && (
                <Avatar
                  src={URL.createObjectURL(formData.image)}
                  alt="product image"
                  radius="full"
                  size="8"
                />
              )}
            </div>

            <div className="flex items-center gap-3">
              <Input
                type="url"
                name="url"
                id="url"
                value={formData.url}
                label="Upload from a url"
                labelClass="mb-1 font-medium"
                onChangeHandler={handleInputChange}
                className="bg-peach-100 w-[20rem]"
              />
              <Button
                variant="primary"
                className="mt-6 hover:bg-peach-100 hover:text-black hover:border-2 hover:border-black"
              >
                Upload
              </Button>
            </div>
          </section>
        </div>

        <div className="flex gap-6 justify-end mt-10 mr-10 font-medium">
          <Button className="border-2 border-black px-4 py-2">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
