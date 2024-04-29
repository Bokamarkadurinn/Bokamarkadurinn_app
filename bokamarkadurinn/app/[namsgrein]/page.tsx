'use client'

//import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Dummy data -- Gögn koma síðar úr DB
let adalNamsgreinar = ['Stærðfræði', 'Íslenska', 'Enska', 'Danska'];
const aukaNamsgreinar = ['Náttúrufræði', 'Saga'];


export default function Page() {
    // https://nextjs.org/docs/app/api-reference/functions/use-router#examples
    const pathname = usePathname();

    return (
        <>
            <h1>Námsgreinarsíða</h1>
            <h3>{ pathname }</h3>
        </>
    );
    //<p>Síða: {router.query.namsgrein}</p>
}
