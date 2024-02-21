import { logo } from "@/assets/images";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
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

const formSchema = z.object({
  email: z.string().email(),
});

function EmailSubscriptionForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-row items-center justify-center gap-1 lg:w-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscribe to our email newsletter</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Email"
                  className="rounded-xl py-6"
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
        <Button type="submit" className="rounded-xl px-8 py-6">
          Submit
        </Button>
      </form>
    </Form>
  );
}

const Footer = () => {
  return (
    <footer>
      <div
        className="
        flex flex-col justify-around gap-10 px-10 py-16 lg:flex-row  lg:px-32
      "
      >
        <img
          src={logo}
          alt="adventourz logo"
          className="hidden h-[250px] w-[250px] object-cover p-4 lg:flex"
        />
        <div className="flex flex-col lg:items-start lg:justify-start">
          <h1 className="text-3xl font-bold">Company</h1>
          <LinkScroll
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </LinkScroll>
          <LinkScroll
            to="tours"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Tours
          </LinkScroll>
          <LinkScroll
            to="blogs"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Blogs
          </LinkScroll>
          <LinkRouter to="/terms-and-conditions">
            Terms and Conditions
          </LinkRouter>
          <LinkRouter to="/privacy-policy">Privacy Policy</LinkRouter>
        </div>
        <div>
          <EmailSubscriptionForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
