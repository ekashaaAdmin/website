export const downloadFile = (
    uri: string | undefined,
    name: string | undefined
) => {
    const link = document.createElement( "a" );
    link.download = name ?? "";
    link.href = uri ?? "";
    document.body.appendChild( link );
    link.click();
    document.body.removeChild( link );
};
