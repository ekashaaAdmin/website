import emailjs from "@emailjs/browser";
import { CSS } from "@src/styles";
import { useFormik } from "formik";
import { useCallback, useRef } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Button } from "../Button";
import { Flex } from "../Flex";
import { Form } from "../Form";
import { Input } from "../Input";
import { Text } from "../Text";

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
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            {
                message: "Invalid valid number.",
                excludeEmptyString: false
            }
        ),
    configuration: yup.number().min( 1 ).max( 10 ),
    location: yup.string(),
    comparisonAnalysis: yup.string()
} );

interface ContactFormProps {
    isPropertyPage?: boolean;
    propertyName?: string;
}

export const ContactForm = ( {
    isPropertyPage,
    propertyName
}: ContactFormProps ) => {
    const form = useRef<HTMLFormElement>( null );

    const sendEmail = useCallback( () => {
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                "contact_template",
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
            configuration: "",
            location: "",
            compareAnalysis: ""
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

            {isPropertyPage ? (
                <>
                    <Flex direction="column" css={{ width: "$full" }}>
                        <Input
                            type="number"
                            placeholder="Configuration (in BHK)"
                            name="configuration"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.configuration}
                        />
                        {touched.configuration && errors.configuration ? (
                            <Text color={"error"}>{errors.configuration}</Text>
                        ) : null}
                    </Flex>
                    <Flex direction="column" css={{ width: "$full" }}>
                        <Input
                            type="text"
                            placeholder="Location"
                            name="location"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.location}
                        />
                        {touched.location && errors.location ? (
                            <Text color={"error"}>{errors.location}</Text>
                        ) : null}
                    </Flex>
                    <Flex direction="row" gap="1" css={{ width: "$full" }}>
                        <Input
                            type="checkbox"
                            name="compareAnalysis"
                            value={values.compareAnalysis}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label>Want Comparison Analysis</label>
                    </Flex>

                    <Input
                        type="text"
                        name="propertyName"
                        css={{ display: "none" }}
                        value={propertyName!}
                        readOnly
                    />
                </>
            ) : null}

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
