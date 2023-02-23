import emailjs from "@emailjs/browser";
import { CSS } from "@src/styles";
import { FormEvent, useCallback, useRef } from "react";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import * as yup from "yup";
import { useFormik } from "formik";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { toast } from "react-toastify";

const formCss: CSS = {
    textAlign: "left",
    width: "90%"
};

const schema = yup.object().shape( {
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
        .string()
        .required()
        .matches( /^(\+?91|0)?[6789]\d{9}$/, {
            message: "Invalid valid number.",
            excludeEmptyString: false
        } )
} );

export const ContactForm = () => {
    const form = useRef<HTMLFormElement>( null );

    const sendEmail = useCallback( () => {
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                form.current as HTMLFormElement,
                import.meta.env.VITE_EMAIL_PUBLIC_ID
            )
            .then(
                ( result ) => {
                    if ( result.text !== "OK" ) {
                        toast( "Sorry couldn't submit the form, please retry " );
                    }
                    toast( "Form Submitted Successfully!" );
                },
                ( error ) => {
                    toast( "Sorry couldn't submit the form, please retry " );
                }
            );
    }, [] );

    const {
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        values
    } = useFormik( {
        initialValues: {
            name: "",
            email: "",
            phone: "",
            role: ""
        },
        validationSchema: schema,
        onSubmit: () => {
            sendEmail();
        }
    } );

    return (
        <Form
            ref={form}
            center
            css={formCss}
            direction={"column"}
            gap={"2"}
            variant={"ekaashaContact"}
            onSubmit={handleSubmit}
        >
            <Flex direction="column" css={{ width: "$full" }}>
                <Input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                {touched.name && errors.name ? (
                    <Text color={"error"}>{errors.name}</Text>
                ) : null}
            </Flex>
            <Flex direction="column" css={{ width: "$full" }}>
                <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {touched.email && errors.email ? (
                    <Text color={"error"}>{errors.email}</Text>
                ) : null}
            </Flex>
            <Flex direction="column" css={{ width: "$full" }}>
                <Input
                    type="number"
                    placeholder="Phone Number"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                />
                {touched.phone && errors.phone ? (
                    <Text color={"error"}>{errors.phone}</Text>
                ) : null}
            </Flex>

            <Flex direction="column" gap="1" css={{ width: "$full" }}>
                <Button variant={"submitButton"} type="submit">
                    Submit
                </Button>
                <Button variant={"submitButton"} onClick={handleReset}>
                    Clear
                </Button>
            </Flex>
        </Form>
    );
};
