export const scrollCompIntoView = ( compId: string ) => {
    document.querySelector( `#${compId}` )?.scrollIntoView( {
        block: "end"
    } );
};
