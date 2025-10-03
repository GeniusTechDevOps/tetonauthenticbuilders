import { useState, useEffect } from 'react';
import type { SectionsHomeAbout } from '../../interfaces/dbData';


export interface PostComponentProps {
    dataBlocks: SectionsHomeAbout[];
}

const PostComponent: React.FC<PostComponentProps> = ({ dataBlocks }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(true); // Abierto por defecto
    const [wasClosed, setWasClosed] = useState(false); // Para controlar si se cerró
    const images = dataBlocks[8]?.additionalImages || [];

    const goToPrevious = () => {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleClose = () => {
        setIsOpen(false);
        setWasClosed(true);
    };

    // Cierra el modal con la tecla Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    if (!images.length || wasClosed) return null; // No renderizar nada si no hay imágenes o se cerró

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={handleClose}
        >
            {/* Botón de cerrar (X) */}
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                }}
                className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-gray-300 focus:outline-none"
                aria-label="Close modal"
            >
                &times;
            </button>

            {/* Contenedor de imagen */}
            <div 
                className="relative max-w-[80vw] max-h-[80vh] md:max-w-[60vw] md:max-h-[85vh]" 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Imagen actual */}
                <img 
                    src={images[currentIndex]} 
                    alt={`Post image ${currentIndex + 1}`} 
                    className="max-h-[80vh] md:max-h-[85vh] max-w-full object-contain"
                />

                {/* Botones de navegación */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                            className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
                            aria-label="Previous image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
                            aria-label="Next image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Indicadores de posición */}
                        <div className="absolute md:bottom-4 -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default PostComponent;