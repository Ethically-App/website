
import Navigation from '@/src/components/Navigation';

type Params = {
    params: { 
        nama: string
    }
}

export default function Materi({ params }: Params) {
    return (
        <>
            <Navigation route={0} />
            
        </>
    )
}