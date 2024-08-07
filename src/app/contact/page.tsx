"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(1, {
    message: "Message is required.",
  }),
  looking_for: z
    .string()
    .min(1, {
      message: "Looking for is required.",
    })
    .max(100, {
      message: "Looking for must be at most 100 characters.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [curCountry, setCountry] = useState();
  const [curCity, setCity] = useState();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const text = "Get in touch";

  useEffect(() => {
    axios.get("https://ipinfo.io/json").then((result: any) => {
      setCountry(result.data["country"]);
      setCity(result.data["city"]);
    });
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setSending(true);
    try {
      // Replace with actual submission logic
      // console.log(values);
      const serviceID = process.env.EMAILJS_SERVICE_ID as string;
      const templateID = process.env.EMAILJS_TEMPLATE_ID as string;
      const publicKey = process.env.EMAILJS_PUBLIC_KEY as string;

      // Replace with your EmailJS service ID, template ID, and user ID

      const templateParams = {
        name: values.name,
        message: values.message,
        email: values.email,
        looking_for: values.looking_for,
        country: curCountry,
        city: curCity,
      };

      const emailResponse = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      console.log(emailResponse);

      setSuccess(true);
      setError(false);
    } catch (err) {
      setError(true);
      setSuccess(false);
    } finally {
      setSending(false);
    }
  };
  const form = useForm();

  return (
    <>
      <div className="overflow-hidden my-20">
        <motion.div
          className="flex-grow"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* TEXT CONTAINER */}
            <div className="lg:w-1/2 flex items-center justify-center text-6xl">
              <div>
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* FORM CONTAINER */}
            <div className="lg:w-1/2 bg-dark border shadow rounded-xl text-xl p-8">
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <Controller
                      control={control}
                      name="name"
                      render={({ field }) => (
                        <FormControl>
                          <Input placeholder="Your Name here " {...field} />
                        </FormControl>
                      )}
                    />
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage>{errors.name?.message}</FormMessage>
                  </FormItem>

                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <Controller
                      control={control}
                      name="email"
                      render={({ field }) => (
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@example.com"
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                    <FormDescription>
                      We will use this email to get back to you.
                    </FormDescription>
                    <FormMessage>{errors.email?.message}</FormMessage>
                  </FormItem>

                  <FormItem>
                    <FormLabel>Looking for...</FormLabel>
                    <Controller
                      control={control}
                      name="looking_for"
                      render={({ field }) => (
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Looking for..."
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                    <FormMessage>{errors.looking_for?.message}</FormMessage>
                  </FormItem>

                  <FormItem>
                    <FormLabel>How can we help?</FormLabel>
                    <Controller
                      control={control}
                      name="message"
                      render={({ field }) => (
                        <FormControl>
                          <Textarea
                            placeholder="Your message here"
                            {...field}
                            className="h-32"
                          />
                        </FormControl>
                      )}
                    />
                    {/* <FormDescription>Enter your message here.</FormDescription> */}
                    <FormMessage>{errors.message?.message}</FormMessage>
                  </FormItem>

                  <Button
                    type="submit"
                    disabled={sending}
                    className="h-12 w-full"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </>
                    ) : (
                      "Send"
                    )}
                  </Button>
                  {success && (
                    <span className="text-green-500 font-semibold">
                      Your message has been sent successfully!
                    </span>
                  )}
                  {error && (
                    <span className="text-red-500 font-semibold">
                      There was an error sending your message. Please try again
                      later.
                    </span>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default React.memo(ContactPage);
