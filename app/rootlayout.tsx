'use client';

import {
    createContext,
    SetStateAction,
    useContext,
    useEffect,
    useId,
    useRef,
    useState,
} from 'react';
import { GitHubLogoIcon, TableIcon, BookmarkFilledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';

import { Button } from '@/components/uis/Button';
import { Container } from '@/components/uis/Container';
import { Footer } from '@/components/uis/Footer';
import { GridPattern } from '@/components/uis/GridPattern';
import { Logo } from '@/components/uis/mylogo';
import { Offices } from '@/components/uis/Offices';
import { SocialMedia } from '@/components/uis/SocialMedia'
import { Tabs } from '@radix-ui/react-tabs';

const RootLayoutContext = createContext<{
    logoHovered: boolean;
    setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
            <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
        </svg>
    );
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M2 6h20v2H2zM2 16h20v2H2z" />
        </svg>
    );
}

// function Header({
//     panelId,
//     icon: Icon,
//     expanded,
//     onToggle,
//     toggleRef,
//     invert = false,
// }: {
//     panelId: string;
//     icon: React.ComponentType<{ className?: string; }>;
//     expanded: boolean;
//     onToggle: () => void;
//     toggleRef: React.RefObject<HTMLButtonElement>;
//     invert?: boolean;
// }) {
//     let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!;
//     let [expandedState, setExpandedState] = useState(expanded);
//     useEffect(() => {
//         setExpandedState(expanded);
//     }, [expanded]);

//     const handleGithubClick = () => {
//         window.location.href = 'https://github.com/JesusOfLagos';
//     }

//     return (
//         <Container>
//             <div className="flex items-center justify-between">
//                 <Link
//                     href="/"
//                     aria-label="Home"
//                     onMouseEnter={() => setLogoHovered(true)}
//                     onMouseLeave={() => setLogoHovered(false)}
//                 >
//                     <Logo
//                         className="h-16"
//                         invert={invert}
//                         filled={logoHovered}
//                     />
//                 </Link>
//                 <div className="flex items-center gap-x-8">
//                     <button
//                         onClick={handleGithubClick} ref={toggleRef} className='bg-[#A25725] hover:bg-[#bd7748] px-8 font-bold text-white rounded-3xl py-3 flex gap-4'>
//                         github
//                         <GitHubLogoIcon className='h-6 w-6' />
//                     </button>
//                     {/* <button
//                         onMouseEnter={onToggle}
//                         ref={toggleRef}
//                         className="bg-[#A25725] hover:bg-[#bd7748] px-8 font-bold text-white rounded-3xl py-3 flex gap-5"
//                     >
//                         tabs...
//                         <TableIcon className="h-6 w-6" />
//                     </button> */}

//                     <button
//                         ref={toggleRef}
//                         // onMouseEnter={onToggle}
//                         onMouseEnter={() => setExpandedState(true)}
//                         onMouseLeave={() => setExpandedState(false)}
//                         type="button"
//                         // onClick={onToggle}
//                         aria-expanded={expanded ? 'true' : 'false'}
//                         aria-controls={panelId}
//                         className={clsx(
//                             'group -m-2.5 rounded-full p-2.5 transition',
//                             invert ? 'hover:bg-pink/10' : 'hover:bg-[#A25725]/10',
//                         )}
//                         aria-label="Toggle navigation"
//                     >
//                         <Icon
//                             className={clsx(
//                                 'h-6 w-6',
//                                 invert
//                                     ? 'fill-white group-hover:fill-neutral-200'
//                                     : 'fill-neutral-950 group-hover:fill-neutral-700',
//                             )}
//                         />
//                     </button>
//                 </div>
//             </div>
//         </Container>
//     );
// }


function Header({
    panelId,
    icon: Icon,
    expanded,
    setExpanded, // ✅ receive setter
    onToggle,
    toggleRef,
    invert = false,
}: {
    panelId: string
    icon: React.ComponentType<{ className?: string }>
    expanded: boolean
    setExpanded: React.Dispatch<React.SetStateAction<boolean>> // ✅ type setter
    onToggle: () => void
    toggleRef: React.RefObject<HTMLButtonElement>
    invert?: boolean
}) {
    let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

    const handleGithubClick = () => {
        window.location.href = "https://github.com/dotandev"
    }

    const handleCertificationClick = () => {
        window.location.href = "/certifications"
    }

    return (
        <Container>
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    aria-label="Home"
                    onMouseEnter={() => setLogoHovered(true)}
                    onMouseLeave={() => setLogoHovered(false)}
                >
                    <Logo className="h-16" invert={invert} filled={logoHovered} />
                </Link>
                <div className="flex items-center gap-x-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleCertificationClick}
                            ref={toggleRef}
                            className="bg-[#A25725] cursor-pointer hover:bg-[#bd7748] px-8 font-bold text-white rounded-3xl py-3 flex gap-4 justify-center items-center"
                        >
                            <span className="hidden sm:inline text-lg">Certifications</span>
                            <span className="sm:hidden">Certs</span>
                            <BookmarkFilledIcon className="h-6 w-6" />
                        </button>

                        <button
                            onClick={handleGithubClick}
                            ref={toggleRef}
                            className="bg-[#A25725] cursor-pointer hover:bg-[#bd7748] px-8 font-bold text-white rounded-3xl py-3 flex gap-4 justify-center items-center"
                        >
                            <span className="hidden sm:inline text-lg">Peek Github</span>
                            <span className="sm:hidden">Github</span>
                            <GitHubLogoIcon className="h-6 w-6" />
                        </button>
                    </div>


                    {/* Navigation toggle */}
                    {/* <button
                        ref={toggleRef}
                        onMouseEnter={() => setExpanded(true)}
                        //   onMouseLeave={() => setExpanded(false)}
                        type="button"
                        aria-expanded={expanded ? "true" : "false"}
                        aria-controls={panelId}
                        className={clsx(
                            "group -m-2.5 rounded-full p-2.5 transition",
                            invert ? "hover:bg-pink/10" : "hover:bg-[#A25725]/10"
                        )}
                        aria-label="Toggle navigation"
                    >
                        <Icon
                            className={clsx(
                                "h-6 w-6",
                                invert
                                    ? "fill-white group-hover:fill-neutral-200"
                                    : "fill-neutral-950 group-hover:fill-neutral-700"
                            )}
                        />
                    </button> */}
                    <button
                        ref={toggleRef}
                        onMouseEnter={() => setExpanded(true)}
                        onClick={onToggle}
                        type="button"
                        aria-expanded={expanded ? "true" : "false"}
                        aria-controls={panelId}
                        className={clsx(
                            "group -m-2.5 cursor-pointer flex items-center gap-2 rounded-full p-2.5 transition",
                            invert ? "hover:bg-pink/10" : "hover:bg-[#A25725]/10"
                        )}
                    >
                        <Icon
                            className={clsx(
                                "h-6 w-6",
                                invert
                                    ? "fill-white group-hover:fill-neutral-200"
                                    : "fill-neutral-950 group-hover:fill-neutral-700"
                            )}
                        />
                        <span
                            className={clsx(
                                "hidden sm:inline text-lg font-medium", // hidden on small, visible from sm and up
                                invert ? "text-white group-hover:text-neutral-200" : "text-neutral-950 group-hover:text-neutral-700"
                            )}
                        >
                            {expanded ? "Click Or Leave Navigation Area To Close" : "Open Navigation Tabs"}
                        </span>

                        {/* Add a small hint for accessibility */}
                        {expanded && (
                            <span className="text-lg">
                                {/* (Leave Navigation Area To Close) */}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </Container>
    )
}


function NavigationRow({ children }: { children: React.ReactNode; }) {
    return (
        <div className="even:mt-px sm:bg-[#A25725]">
            <hr className='border-3 border-white' />
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
            </Container>
        </div>
    );
}

function NavigationItem({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="group relative isolate -mx-6 bg-[#A25725] hover:text-[#A25725] hover:bg-[#A25725] px-6 py-4 even:mt-px sm:mx-0 sm:px-0 sm:py-10 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-pink-800 sm:even:pl-16"
        >
            {children}
            <span className="absolute inset-y-0 -z-10 w-screen bg-white hover:bg-white opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
        </Link>
    );
}

function Navigation({
    setExpanded, // ✅ receive setter
}: {
    setExpanded: React.Dispatch<React.SetStateAction<boolean>> // ✅ type setter
}) {
    return (
        <nav
            onMouseLeave={() => setExpanded(false)}
            className="mt-px font-display text-5xl font-medium tracking-tight text-white">
            <NavigationRow>
                <NavigationItem href="/about">About</NavigationItem>
                <NavigationItem href="/research">Research</NavigationItem>
            </NavigationRow>
            <NavigationRow>
                <NavigationItem href="/projects">Projects</NavigationItem>
                <NavigationItem href="/hacks">Hacks</NavigationItem>
            </NavigationRow>
            <NavigationRow>
                <NavigationItem href="/experience">Experience</NavigationItem>
                <NavigationItem href="/contact">Contact</NavigationItem>
            </NavigationRow>
            <NavigationRow>
                <NavigationItem href="/activity">Activity</NavigationItem>
                <NavigationItem href="/blog">Blog</NavigationItem>
            </NavigationRow>
        </nav>
    );
}

// function RootLayoutInner({ children }: { children: React.ReactNode; }) {
//     let panelId = useId();
//     let [expanded, setExpanded] = useState(false);
//     let openRef = useRef<React.ElementRef<'button'>>(null);
//     let closeRef = useRef<React.ElementRef<'button'>>(null);
//     let navRef = useRef<React.ElementRef<'div'>>(null);
//     let shouldReduceMotion = useReducedMotion();

//     useEffect(() => {
//         function onClick(event: MouseEvent) {
//             if (
//                 event.target instanceof HTMLElement &&
//                 event.target.closest('a')?.href === window.location.href
//             ) {
//                 setExpanded(false);
//             }
//         }

//         window.addEventListener('click', onClick);

//         return () => {
//             window.removeEventListener('click', onClick);
//         };
//     }, []);

//     return (
//         <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
//             <header>
//                 <div
//                     className="absolute left-0 right-0 top-2 z-40 pt-14"
//                     aria-hidden={expanded ? 'true' : undefined}
//                     // @ts-ignore (https://github.com/facebook/react/issues/17157)
//                     inert={expanded ? '' : undefined}
//                 >
//                     <Header
//                         panelId={panelId}
//                         icon={MenuIcon}
//                         toggleRef={openRef}
//                         expanded={expanded}
//                         onToggle={() => {
//                             setExpanded((expanded) => !expanded);
//                             window.setTimeout(
//                                 () => closeRef.current?.focus({ preventScroll: true }),
//                             );
//                         }}
//                     />
//                 </div>

//                 <motion.div
//                     layout
//                     id={panelId}
//                     style={{ height: expanded ? 'auto' : '0.5rem' }}
//                     className="relative z-50 overflow-hidden bg-[#A25725] pt-2 border border-b-white"
//                     aria-hidden={expanded ? undefined : 'true'}
//                     // @ts-ignore (https://github.com/facebook/react/issues/17157)
//                     inert={expanded ? undefined : ''}
//                 >
//                     <motion.div layout className="bg-[#A25725]">
//                         <div ref={navRef} className="bg-[#A25725] pb-16 pt-14">
//                             <Header
//                                 invert
//                                 panelId={panelId}
//                                 icon={XIcon}
//                                 toggleRef={closeRef}
//                                 expanded={expanded}
//                                 onToggle={() => {
//                                     setExpanded((expanded) => !expanded);
//                                     window.setTimeout(
//                                         () => openRef.current?.focus({ preventScroll: true }),
//                                     );
//                                 }}
//                             />
//                         </div>
//                         <Navigation />
//                         {/* <div className="relative bg-[#A25725] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
//                             <Container>
//                                 <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
//                                     <div>
//                                         <h2 className="font-display text-base font-semibold text-white">
//                                             Our Locations
//                                         </h2>
//                                         <Offices
//                                             invert
//                                             className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
//                                         />
//                                     </div>
//                                     <div className="sm:border-l sm:border-transparent sm:pl-16">
//                                         <h2 className="font-display text-base font-semibold text-white">
//                                             Follow us
//                                         </h2>
//                                         <SocialMedia className="mt-6" invert />
//                                     </div>
//                                 </div>
//                             </Container>
//                         </div> */}
//                     </motion.div>
//                 </motion.div>
//             </header>

//             <motion.div
//                 layout
//                 style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
//                 className="relative flex flex-auto overflow-hidden bg-white pt-14"
//             >
//                 <motion.div
//                     layout
//                     className="relative isolate flex w-full flex-col pt-9"
//                 >
//                     <GridPattern
//                         className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
//                         yOffset={-96}
//                         interactive
//                     />

//                     <main className="w-full flex-auto">{children}</main>
//                 </motion.div>
//             </motion.div>
//         </MotionConfig>
//     );
// }



function RootLayoutInner({ children }: { children: React.ReactNode }) {
    let panelId = useId()
    let [expanded, setExpanded] = useState(false)
    let openRef = useRef<React.ElementRef<"button">>(null)
    let closeRef = useRef<React.ElementRef<"button">>(null)
    let navRef = useRef<React.ElementRef<"div">>(null)
    let shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        function onClick(event: MouseEvent) {
            if (
                event.target instanceof HTMLElement &&
                event.target.closest("a")?.href === window.location.href
            ) {
                setExpanded(false)
            }
        }
        window.addEventListener("click", onClick)
        return () => window.removeEventListener("click", onClick)
    }, [])

    return (
        <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
            <header>
                <div
                    className="absolute left-0 right-0 top-2 z-40 pt-14"
                    aria-hidden={expanded ? "true" : undefined}
                    // @ts-ignore
                    inert={expanded ? "" : undefined}
                >
                    <Header
                        panelId={panelId}
                        icon={MenuIcon}
                        toggleRef={openRef}
                        expanded={expanded}
                        setExpanded={setExpanded} // ✅ pass setter down
                        onToggle={() => {
                            setExpanded((expanded) => !expanded)
                            window.setTimeout(() =>
                                closeRef.current?.focus({ preventScroll: true })
                            )
                        }}
                    />
                </div>

                <motion.div
                    layout
                    id={panelId}
                    style={{ height: expanded ? "auto" : "0.5rem" }}
                    className="relative z-50 overflow-hidden bg-[#A25725] pt-2 border border-b-white"
                    aria-hidden={expanded ? undefined : "true"}
                    // @ts-ignore
                    inert={expanded ? undefined : ""}
                >
                    <motion.div layout className="bg-[#A25725]">
                        <div ref={navRef} className="bg-[#A25725] pb-16 pt-14">
                            <Header
                                invert
                                panelId={panelId}
                                icon={XIcon}
                                toggleRef={closeRef}
                                expanded={expanded}
                                setExpanded={setExpanded} // ✅ pass setter down
                                onToggle={() => {
                                    setExpanded((expanded) => !expanded)
                                    window.setTimeout(() =>
                                        openRef.current?.focus({ preventScroll: true })
                                    )
                                }}
                            />
                        </div>

                        {/* 👇 Add hint before nav */}
                        {!expanded && (
                            <p className="text-center text-white text-sm py-2 opacity-80">
                                Click the menu icon to navigate
                            </p>
                        )}

                        <Navigation setExpanded={setExpanded} />
                    </motion.div>
                </motion.div>
            </header>

            <motion.div
                layout
                style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                className="relative flex flex-auto overflow-hidden bg-white pt-14"
            >
                <motion.div layout className="relative isolate flex w-full flex-col pt-9">
                    <GridPattern
                        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                        yOffset={-96}
                        interactive
                    />
                    <main className="w-full flex-auto">{children}</main>
                </motion.div>
            </motion.div>
        </MotionConfig>
    )
}


export function RootLayout({ children }: { children: React.ReactNode; }) {
    let pathname = usePathname();
    let [logoHovered, setLogoHovered] = useState(false);

    return (
        <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
            <RootLayoutInner key={pathname}>
                <div style={{ position: "relative", zIndex: 100 }}>''</div>
            </RootLayoutInner>
            <div>{children}</div>
            <Footer />
        </RootLayoutContext.Provider>
    );
}
