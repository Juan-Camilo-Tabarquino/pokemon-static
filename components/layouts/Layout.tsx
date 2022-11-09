import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
    children: JSX.Element,
    title?: string,
}

const origin = (typeof window === "undefined") ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Juan Camilo Tabarquino"/>
            <meta name="description" content={`Informacion sobre el pokemon  ${title}`}/>
            <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la pagina con la informacion sobre el pokemon ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        </Head>
        <Navbar/>
        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
