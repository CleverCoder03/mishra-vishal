'use client';

import React, { useRef, useId, useEffect, CSSProperties, useMemo, useCallback } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';

interface ResponsiveImage {
    src: string;
    alt?: string;
    srcSet?: string;
}

interface AnimationConfig {
    preview?: boolean;
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface ShadowOverlayProps {
    type?: 'preset' | 'custom';
    presetIndex?: number;
    customImage?: ResponsiveImage;
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
}

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
    if (fromLow === fromHigh) return toLow;
    return toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);
}

const useInstanceId = (): string => {
    const id = useId();
    return `shadowoverlay-${id.replace(/:/g, "")}`;
};

export function Component({
    sizing = 'fill',
    color = 'rgba(128, 128, 128, 1)',
    animation,
    noise,
    style,
    className
}: ShadowOverlayProps) {
    const id = useInstanceId();
    const animationEnabled = animation && animation.scale > 0;
    const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
    const hueRotateMotionValue = useMotionValue(180);
    const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);
    const lastUpdateTime = useRef(0);

    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 80) : 0;
    const inset = -Math.ceil(displacementScale / 2);
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;

    const baseFrequency = useMemo(() =>
        animation
            ? `${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`
            : '0.001,0.004',
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [animation?.scale]
    );

    // Throttle SVG DOM updates to ~30fps — halves repaint cost vs 60fps
    const handleUpdate = useCallback((value: number) => {
        const now = performance.now();
        if (now - lastUpdateTime.current < 33) return;
        lastUpdateTime.current = now;
        feColorMatrixRef.current?.setAttribute("values", String(Math.round(value)));
    }, []);

    useEffect(() => {
        if (!feColorMatrixRef.current || !animationEnabled) return;

        hueRotateAnimation.current?.stop();
        hueRotateMotionValue.set(0);

        hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
            duration: animationDuration / 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
            delay: 0,
            onUpdate: handleUpdate,
        });

        return () => { hueRotateAnimation.current?.stop(); };
    }, [animationEnabled, animationDuration, hueRotateMotionValue, handleUpdate]);

    return (
        <div
            className={className}
            style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                contain: "paint",
                ...style
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset,
                    // GPU layer — isolates repaints from the rest of the page
                    transform: "translateZ(0)",
                    willChange: animationEnabled ? "filter" : "auto",
                    filter: animationEnabled ? `url(#${id}) blur(2px)` : "none",
                }}
            >
                {animationEnabled && (
                    // zero-size SVG so it doesn't affect layout
                    <svg style={{ position: "absolute", width: 0, height: 0 }}>
                        <defs>
                            <filter
                                id={id}
                                x="-25%" y="-25%"
                                width="150%" height="150%"
                                colorInterpolationFilters="sRGB"
                            >
                                <feTurbulence
                                    result="undulation"
                                    numOctaves="2"
                                    baseFrequency={baseFrequency}
                                    seed="0"
                                    type="turbulence"
                                />
                                <feColorMatrix
                                    ref={feColorMatrixRef}
                                    in="undulation"
                                    type="hueRotate"
                                    values="180"
                                    result="rotated"
                                />
                                {/* Single displacement pass — original had two, second one referenced
                                    an undefined "dist" input so it was broken anyway */}
                                <feColorMatrix
                                    in="rotated"
                                    result="circulation"
                                    type="matrix"
                                    values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="circulation"
                                    scale={displacementScale}
                                    result="output"
                                />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: color,
                        maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>

            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 2,
                        transform: "translateZ(0)",
                    }}
                />
            )}
        </div>
    );
}
