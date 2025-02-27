import { Environment, PresentationControls, useGLTF, Float, ContactShadows, Html } from '@react-three/drei'


export default function Experience()
{
    const laptop = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    const handleClick = () => {
        window.open("https://portfolio-jarne.vercel.app/", "_blank");
    };
    

    return <>

        <color args={ ['#121220'] } attach="background"/>

        <Environment preset="city" />

        <PresentationControls
        global
        rotation={[ 0, 0.1, 0]}
        polar={[0, 0]}
        azimuth={[ -1, 0.75]}
        config={ {mass: 2, tension: 400}}
        >
            <Float
            rotationIntensity={0.4}
            >
                <rectAreaLight
                width={ 2.5 }
                height={ 1.65 }
                intensity={ 40 }
                color={ '#0069ff' }
                rotation={ [ - 0.1, Math.PI, 0 ] }
                position={ [ 0, 0.55, - 1.15 ] }
                />
                <primitive
                object={laptop.scene}
                position={ [-0.2, -1.3, -0.5] }
                >
                    <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={ 0.95 }
                    position={[0, 1.55, -1.4]}
                    rotation-x={-0.25}
                    emissive="purple"
                    emissiveIntensity={ 15 }
                    >
                        <iframe src="https://portfolio-jarne.vercel.app/"/>
                    </Html>
                    <Html position={[1, 1.8, 0]}>
                        <button 
                            onClick={handleClick} 
                            style={{
                                background: 'rgb(0, 0, 0, 0.5)',
                                border: '1px solid rgb(46, 192, 255, 1)',
                                color: 'rgb(46, 192, 255, 1)',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontWeight: 700,
                                letterSpacing: '6px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                userSelect: 'none',
                                padding: '10px 15px',
                                borderRadius: '50px',
                                width: '250px',
                                transition: 'all 0.1s ease-in-out'
                            }}
                            onMouseOver={(e) => {[e.target.style.background = 'rgb(46, 192, 255, 0.8)', e.target.style.color = 'rgb(0, 0, 0, 1)']}}
                            onMouseOut={(e) => {[e.target.style.background = 'rgb(0, 0, 0, 0.5)', e.target.style.color = 'rgb(46, 192, 255, 1)']}}
                        >
                            VIEW WEBSITE
                        </button>
                    </Html>

                </primitive>
            </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.3} scale={5} blur={2.4}/>
    </>
}