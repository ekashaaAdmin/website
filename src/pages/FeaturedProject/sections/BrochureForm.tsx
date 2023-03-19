import emailjs from "@emailjs/browser";
import { Button, Flex, FlexBox, Form, Input, Text } from "@src/components";
import { CSS } from "@src/styles";
import { downloadFile } from "@src/utils";
import { useFormik } from "formik";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useRef
} from "react";
import { toast } from "react-toastify";
import * as yup from "yup";

export interface BrochureFormProps {
    propertyName: string;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const schema = yup.object().shape( {
    name: yup.string().required(),
    email: yup.string().email().required()
} );

const formCss: CSS = {
    width: "90%",
    "@bp3": {
        padding: "$2"
    }
};

interface userInfoProps {
    name: string;
    email: string;
}

const userInfo: userInfoProps = JSON.parse(
    localStorage.getItem( "ekashaaUserInfo" ) as string
);

export const BrochureForm = ( { propertyName, setOpen }: BrochureFormProps ) => {
    const form = useRef<HTMLFormElement>( null );

    const closeForm = useCallback( () => {
        setOpen( false );
    }, [ setOpen ] );

    const sendEmail = useCallback( ( name: string, email: string ) => {
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_BROCHURE_EMAIL_TEMPLATE_ID,
                form.current as HTMLFormElement,
                import.meta.env.VITE_EMAIL_PUBLIC_ID
            )
            .then(
                ( result ) => {
                    if ( result.text !== "OK" ) {
                        toast( "Sorry couldn't submit the form, please retry " );
                    }
                    toast( "Form Submitted Successfully!" );
                    downloadFile(
                        "https://drive.google.com/file/d/1AnbE6AQqh9yN2OA7-6Iq_7T2Poz5-lr0/view?usp=share_link",
                        "Esquire-Brochure.pdf"
                    );
                    const ekashaaUserInfo = {
                        email,
                        name
                    };
                    localStorage.setItem(
                        "ekashaaUserInfo",
                        JSON.stringify( ekashaaUserInfo )
                    );
                    closeForm();
                },
                ( error ) => {
                    toast( "Sorry couldn't submit the form, please retry " );
                }
            );
    }, [] );

    const { touched, errors, handleChange, handleBlur, handleSubmit, values } =
        useFormik( {
            initialValues: {
                email: userInfo?.email ?? "",
                name: userInfo?.name ?? ""
            },
            validationSchema: schema,
            onSubmit: () => {
                sendEmail( values.name, values.email );
            }
        } );

    useEffect( () => {
        const submitForm = ( e: KeyboardEvent ) => {
            if ( e.key === "Enter" ) {
                handleSubmit();
            }
        };
        document.addEventListener( "keydown", submitForm );

        return () => {
            document.removeEventListener( "keydown", submitForm );
        };
    } );

    return (
        <FlexBox direction="column" gap="4" align="center" justify="center">
            <Text
                typography={{
                    "@initial": "dtPara1",
                    "@bp1": "dtHeading3",
                    "@bp2": "dtHeading2"
                }}
                align={"center"}
            >
                Please provide your Contact Info to access the brochure.
            </Text>
            <Form
                ref={form}
                css={formCss}
                center
                direction={"column"}
                gap="2"
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

                <Input
                    type="text"
                    name="propertyName"
                    css={{ display: "none" }}
                    value={propertyName}
                />

                <Flex direction="column" gap="1" css={{ width: "$full" }}>
                    <Button variant={"submitButton"} type="submit">
                        Submit
                    </Button>
                    <Button variant={"submitButton"} onClick={closeForm}>
                        Close
                    </Button>
                </Flex>
            </Form>
        </FlexBox>
    );
};
