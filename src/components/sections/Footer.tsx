import { logo } from "@/assets/images";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaInstagram } from "react-icons/fa";

interface FormValues {
  Email: string;
}

const formSchema = z.object({
  Email: z.string().email(),
});

const EmailSubscriptionForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
    },
  });

  function onSubmit(values: FormValues) {
    const endpoint =
      "https://script.google.com/macros/s/AKfycbzG6_yiknWizpmlESCp8VxmdL14ahr94sprCQsH7E19HcCBPbmNMrDX17cPNKfdnpfD/exec";

    fetch(endpoint, {
      method: "POST",
      mode: "no-cors", // This prevents CORS errors, but also means you can't read the response
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.Email }),
    })
      .then(() => console.log("Email submitted successfully"))
      .catch((error) => console.error("Error:", error));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-row items-center gap-4"
      >
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscribe to our email newsletter</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Email"
                  className="rounded-xl py-3"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                We'll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-xl px-8 py-3">
          Submit
        </Button>
      </form>
    </Form>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <section className="container flex w-full flex-col gap-8 py-16 lg:flex-row  lg:justify-between lg:px-32 ">
        <div className="flex justify-center lg:flex-shrink-0 lg:justify-start">
          <img
            src={logo}
            alt="Adventourz logo"
            className="hidden h-[100px] w-auto object-contain lg:block lg:h-auto lg:max-h-[200px]"
            loading="eager"
          />
        </div>
        <nav className="flex flex-col  items-start gap-2">
          <h1 className="text-xl font-bold">Company</h1>
          <Link className="text-lg hover:text-primary" to="/about-us">
            About
          </Link>
          <Link className="text-lg hover:text-primary" to="/tours">
            Tours
          </Link>
          <Link className="text-lg hover:text-primary" to="/blogs">
            Blogs
          </Link>
          <Link
            className="text-lg hover:text-primary"
            to="/terms-and-conditions"
          >
            Terms and Conditions
          </Link>
          <Link className="text-lg hover:text-primary" to="/privacy-policy">
            Privacy Policy
          </Link>
        </nav>
        <section className="flex flex-col justify-between gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">Follow us</p>
            <Link
              to="https://www.instagram.com/adventourz_travel"
              target="_blank"
            >
              <FaInstagram className="h-6 w-6 cursor-pointer text-black duration-300 hover:text-secondary" />
            </Link>
          </div>
          <EmailSubscriptionForm />
        </section>
      </section>
      <div className="flex w-full flex-col items-center justify-center  border-t border-gray-200  py-4 text-center text-black">
        <p>&copy; {year} Adventourz. All rights reserved.</p>
        <p>
          Website by{" "}
          <a
            href="https://techiden.com"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-t from-[#FA855B] to-[#FA6F9C] bg-clip-text font-bold text-transparent"
          >
            Techiden
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
