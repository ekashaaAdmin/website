import { Flex, Section, Text } from "@src/components";

export const PrivacyPolicy = () => {
    return (
        <Section direction={"column"} css={{ maxWidth: "$tablet" }}>
            <Flex
                direction="column"
                gap={1}
                css={{
                    my: "$5",
                    "@bp3": {
                        my: "$10"
                    }
                }}
            >
                <Text
                    typography={{
                        "@initial": "mbHeading2",
                        "@bp3": "dtHeading2"
                    }}
                >
                    Privacy Policy
                </Text>
                <Text
                    typography={{
                        "@initial": "dtPara3",
                        "@bp3": "dtPara2"
                    }}
                >
                    Privacy Policy This Privacy Policy governs the manner in
                    which website collects, uses, maintains and discloses
                    information collected from users (each, a “User”) of the{" "}
                    <a href="https://www.ekashaa.com">
                        https://www.ekashaa.com/
                    </a>
                    . This privacy policy applies to the Site.
                </Text>
                <br />
                <Text
                    typography={{
                        "@initial": "dtHeading3",
                        "@bp3": "dtHeading3"
                    }}
                    css={{
                        fontWeight: "$dtHeading3"
                    }}
                >
                    - Personal identification information
                </Text>
                <Text
                    typography={{
                        "@initial": "dtPara3",
                        "@bp3": "dtPara2"
                    }}
                >
                    We may collect personal identification information from
                    Users in a variety of ways in connection with activities,
                    services, features or resources we make available on our
                    Site.. Users may visit our Site anonymously. We will collect
                    personal identification information from Users only if they
                    voluntarily submit such information to us. Users can always
                    refuse to supply personally identification information,
                    except that it may prevent them from engaging in certain
                    Site related activities.
                </Text>
                <br />
                <Text
                    typography={{
                        "@initial": "dtHeading3",
                        "@bp3": "dtHeading3"
                    }}
                    css={{
                        fontWeight: "$dtHeading3"
                    }}
                >
                    - Non-personal identification information
                </Text>
                <Text
                    typography={{
                        "@initial": "dtPara3",
                        "@bp3": "dtPara2"
                    }}
                >
                    We may collect non-personal identification information about
                    Users whenever they interact with our Site. Non-personal
                    identification information may include the browser name, the
                    type of computer and technical information about Users means
                    of connection to our Site, such as the operating system and
                    the Internet service providers utilized and other similar
                    information.
                </Text>
                <br />
                <Text
                    typography={{
                        "@initial": "dtHeading3",
                        "@bp3": "dtHeading3"
                    }}
                    css={{
                        fontWeight: "$dtHeading3"
                    }}
                >
                    - Web browser cookies
                </Text>
                <Text
                    typography={{
                        "@initial": "dtPara3",
                        "@bp3": "dtPara2"
                    }}
                >
                    Our Site may use “cookies” to enhance User experience.
                    User’s web browser places cookies on their hard drive for
                    record-keeping purposes and sometimes to track information
                    about them. User may choose to set their web browser to
                    refuse cookies, or to alert you when cookies are being sent.
                    If they do so, note that some parts of the Site may not
                    function properly.
                </Text>
                <br />
                <Text
                    typography={{
                        "@initial": "dtHeading3",
                        "@bp3": "dtHeading3"
                    }}
                    css={{
                        fontWeight: "$dtHeading3"
                    }}
                >
                    - How we protect your information
                </Text>
                <Text
                    typography={{
                        "@initial": "dtPara3",
                        "@bp3": "dtPara2"
                    }}
                >
                    We adopt appropriate data collection, storage and processing
                    practices and security measures to protect against
                    unauthorized access, alteration, disclosure or destruction
                    of your personal information, username, password,
                    transaction information and data stored on our Site.
                </Text>
                <br />
                <Text
                    typography={{
                        "@initial": "dtHeading3",
                        "@bp3": "dtHeading3"
                    }}
                    css={{
                        fontWeight: "$dtHeading3"
                    }}
                >
                    - Sharing your personal information
                </Text>
                <Text
                    typography={{
                        "@initial": "dtPara3",
                        "@bp3": "dtPara2"
                    }}
                >
                    We do not sell, trade, or rent Users personal identification
                    information to others. We may share generic aggregated
                    demographic information not linked to any personal
                    identification information regarding visitors and users with
                    our business partners, trusted affiliates and advertisers
                    for the purposes outlined above.
                </Text>
                <br />
                <Text
                    typography={{
                        "@initial": "dtHeading3",
                        "@bp3": "dtHeading3"
                    }}
                    css={{
                        fontWeight: "$dtHeading3"
                    }}
                >
                    - Changes to this privacy policy
                </Text>
                <Text
                    typography={{
                        "@initial": "dtPara3",
                        "@bp3": "dtPara2"
                    }}
                >
                    We have the discretion to update this privacy policy at any
                    time. When we do, we will revise the updated date at the
                    bottom of this page. We encourage Users to frequently check
                    this page for any changes to stay informed about how we are
                    helping to protect the personal information we collect. You
                    acknowledge and agree that it is your responsibility to
                    review this privacy policy periodically and become aware of
                    modifications.
                </Text>
                <br />
                <Text
                    typography={{
                        "@initial": "dtHeading3",
                        "@bp3": "dtHeading3"
                    }}
                    css={{
                        fontWeight: "$dtHeading3"
                    }}
                >
                    - Your acceptance of these terms
                </Text>
                <Text
                    typography={{
                        "@initial": "dtPara3",
                        "@bp3": "dtPara2"
                    }}
                >
                    By using this Site, you signify your acceptance of this
                    policy. If you do not agree to this policy, please do not
                    use our Site. Your continued use of the Site following the
                    posting of changes to this policy will be deemed your
                    acceptance of those changes.
                </Text>
            </Flex>
        </Section>
    );
};
