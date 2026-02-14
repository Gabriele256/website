import { ReactNode, useId, CSSProperties } from "react";
import styles from "./glassElement.module.css";

type GlassVariant = "default" | "light" | "dark" | "colored" | "subtle";

interface GlassElementProps {
    children: ReactNode;
    className?: string;
    
    variant?: GlassVariant;
    
    borderRadius?: number;
    blurAmount?: number;
    shadowIntensity?: number;
    glowColor?: string;
    
    turbulenceFrequency?: number;
    displacementScale?: number;
    noiseOctaves?: number;
    noiseSeed?: number;
    
    style?: CSSProperties;
    enableNoise?: boolean;
}

const variantStyles: Record<GlassVariant, CSSProperties> = {
    default: {
        "--glow-color": "rgba(255, 255, 255, 0.7)",
        "--shadow-intensity": "1",
    } as CSSProperties,
    light: {
        "--glow-color": "rgba(255, 255, 255, 0.9)",
        "--shadow-intensity": "1.2",
    } as CSSProperties,
    dark: {
        "--glow-color": "rgba(255, 255, 255, 0.3)",
        "--shadow-intensity": "0.6",
    } as CSSProperties,
    colored: {
        "--glow-color": "rgba(147, 197, 253, 0.8)",
        "--shadow-intensity": "1.5",
    } as CSSProperties,
    subtle: {
        "--glow-color": "rgba(255, 255, 255, 0.4)",
        "--shadow-intensity": "0.8",
    } as CSSProperties,
};

export default function GlassElement({
    children,
    className = "",
    variant = "default",
    borderRadius = 30,
    blurAmount = 0,
    shadowIntensity,
    glowColor,
    turbulenceFrequency = 0.001,
    displacementScale = 100,
    noiseOctaves = 1,
    noiseSeed = 5,
    style = {},
    enableNoise = true,
}: GlassElementProps) {
    const uniqueId = useId();
    const filterId = `glass-filter-${uniqueId.replace(/:/g, "")}`;

    const containerStyle: CSSProperties = {
        ...variantStyles[variant],
        "--glass-filter-ref": enableNoise ? `url(#${filterId})` : "none",
        "--border-radius": `${borderRadius}px`,
        "--blur-amount": `${blurAmount}px`,
        ...(glowColor && { "--glow-color": glowColor }),
        ...(shadowIntensity && { "--shadow-intensity": shadowIntensity }),
        ...style,
    };

    return (
        <div className="">
            <div
                className={`${styles.glassContainer} ${className}`}
                style={containerStyle}
            >
                {children}
            </div>
            {enableNoise && (
                <svg style={{ display: "none" }}>
                    <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency={`${turbulenceFrequency} ${turbulenceFrequency}`}
                            numOctaves={noiseOctaves}
                            seed={noiseSeed}
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale={displacementScale}
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </svg>
            )}
        </div>
    );
}