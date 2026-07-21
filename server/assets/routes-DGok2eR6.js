import { t as getServerFnById } from "./__23tanstack-start-server-fn-resolver-DTX7nRLe.js";
import { d as TSS_SERVER_FUNCTION, t as createServerFn } from "./createServerFn-CIHAFgYl.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { FiCalendar, FiHeart, FiMapPin } from "react-icons/fi";
import { GiIndianPalace, GiLotus } from "react-icons/gi";
//#region src/lib/motion.tsx
var createMotionComponent = (tag) => {
	return React.forwardRef(function MotionComponent({ initial, animate, exit, transition, whileHover, whileInView, viewport, ...props }, ref) {
		return React.createElement(tag, {
			...props,
			ref
		});
	});
};
var motion = new Proxy({}, { get: (_target, tag) => createMotionComponent(tag) });
var AnimatePresence = ({ children }) => /* @__PURE__ */ jsx(Fragment, { children });
var useScroll = () => ({ scrollYProgress: 0 });
var useSpring = (value) => value;
var useTransform = (value, transformer) => transformer(value);
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/Neha_Akshith/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/rsvp-email.ts
var sendRsvpEmail = createServerFn({ method: "POST" }).handler(createSsrRpc("d27e2b5edd646a3f296603629d7f2132a415f70ee2b08aae8610bd7a8ba35d4b"));
//#endregion
//#region src/assets/kalash.png
var kalash_default = "/Neha_Akshith/assets/kalash-h5Qc7biy.png";
//#endregion
//#region src/assets/divider.png
var divider_default = "/Neha_Akshith/assets/divider-hL65YliZ.png";
//#endregion
//#region src/assets/diya.png
var diya_default = "/Neha_Akshith/assets/diya-B6LoiHd7.png";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var WEDDING_DATE = (/* @__PURE__ */ new Date("2026-08-30T09:30:00+05:30")).getTime();
function GoldenCursor() {
	const [pos, setPos] = useState({
		x: -100,
		y: -100
	});
	const [trail, setTrail] = useState([]);
	useEffect(() => {
		let id = 0;
		const onMove = (e) => {
			setPos({
				x: e.clientX,
				y: e.clientY
			});
			setTrail((t) => [...t.slice(-8), {
				x: e.clientX,
				y: e.clientY,
				id: id++
			}]);
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none fixed inset-0 z-[9999] hidden md:block",
		children: [trail.map((t, i) => /* @__PURE__ */ jsx("div", {
			className: "absolute h-1 w-1 rounded-full bg-gold",
			style: {
				left: t.x,
				top: t.y,
				opacity: (i + 1) / trail.length * .6,
				transform: `translate(-50%,-50%) scale(${(i + 1) / trail.length})`,
				boxShadow: "0 0 8px rgba(200,155,60,0.9)"
			}
		}, t.id)), /* @__PURE__ */ jsx("div", {
			className: "absolute h-6 w-6 rounded-full",
			style: {
				left: pos.x,
				top: pos.y,
				transform: "translate(-50%,-50%)",
				background: "radial-gradient(circle, rgba(255,220,120,0.9) 0%, rgba(200,155,60,0.4) 40%, transparent 70%)",
				boxShadow: "0 0 20px rgba(200,155,60,0.8)"
			}
		})]
	});
}
function GoldenDust() {
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		children: Array.from({ length: 30 }).map((_, i) => /* @__PURE__ */ jsx("span", {
			className: "absolute rounded-full bg-gold-soft",
			style: {
				left: `${Math.random() * 100}%`,
				width: `${Math.random() * 4 + 2}px`,
				height: `${Math.random() * 4 + 2}px`,
				opacity: Math.random() * .5 + .2,
				boxShadow: "0 0 8px rgba(230,201,134,0.9)",
				animation: `float-up ${Math.random() * 15 + 12}s linear ${Math.random() * 10}s infinite`
			}
		}, i))
	});
}
function Petals() {
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsx("span", {
			className: "absolute text-lg",
			style: {
				left: `${Math.random() * 100}%`,
				top: `-5%`,
				color: i % 2 === 0 ? "#c89b3c" : "#e6a5b0",
				animation: `petal-fall ${Math.random() * 12 + 10}s linear ${Math.random() * 10}s infinite`
			},
			children: "❁"
		}, i))
	});
}
function IntroOverlay({ onDone }) {
	const [phase, setPhase] = useState(0);
	useEffect(() => {
		const timers = [
			setTimeout(() => setPhase(1), 600),
			setTimeout(() => setPhase(2), 1600),
			setTimeout(() => setPhase(3), 2800),
			setTimeout(() => setPhase(4), 3800),
			setTimeout(() => onDone(), 4800)
		];
		return () => timers.forEach(clearTimeout);
	}, [onDone]);
	return /* @__PURE__ */ jsxs(motion.div, {
		className: "fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0203]",
		exit: { opacity: 0 },
		transition: { duration: 1 },
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 overflow-hidden",
			children: Array.from({ length: 40 }).map((_, i) => /* @__PURE__ */ jsx("span", {
				className: "absolute rounded-full bg-gold-soft",
				style: {
					left: `${Math.random() * 100}%`,
					width: 3,
					height: 3,
					boxShadow: "0 0 10px rgba(230,201,134,0.9)",
					animation: `float-up ${Math.random() * 10 + 8}s linear ${Math.random() * 3}s infinite`
				}
			}, i))
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative h-[70vh] w-[90vw] max-w-2xl",
			children: [
				/* @__PURE__ */ jsx(motion.img, {
					src: diya_default,
					alt: "",
					className: "absolute left-4 top-1/2 h-24 -translate-y-1/2 animate-flicker",
					initial: { opacity: 0 },
					animate: { opacity: phase >= 2 ? 1 : 0 },
					transition: { duration: 1 }
				}),
				/* @__PURE__ */ jsx(motion.img, {
					src: diya_default,
					alt: "",
					className: "absolute right-4 top-1/2 h-24 -translate-y-1/2 animate-flicker",
					style: { animationDelay: "0.5s" },
					initial: { opacity: 0 },
					animate: { opacity: phase >= 2 ? 1 : 0 },
					transition: { duration: 1 }
				}),
				/* @__PURE__ */ jsx(motion.img, {
					src: kalash_default,
					alt: "Kalash",
					className: "absolute left-1/2 top-1/2 h-48 -translate-x-1/2 -translate-y-1/2 md:h-64",
					initial: {
						opacity: 0,
						y: 40,
						scale: .7
					},
					animate: {
						opacity: phase >= 3 ? 1 : 0,
						y: phase >= 3 ? 0 : 40,
						scale: phase >= 3 ? 1 : .7
					},
					transition: { duration: 1.2 },
					style: { filter: "drop-shadow(0 0 30px rgba(200,155,60,0.6))" }
				}),
				/* @__PURE__ */ jsx(motion.div, {
					className: "absolute inset-x-0 bottom-4 text-center",
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: phase >= 4 ? 1 : 0,
						y: phase >= 4 ? 0 : 20
					},
					transition: { duration: 1 },
					children: /* @__PURE__ */ jsx("div", {
						className: "font-script text-4xl text-gold-gradient md:text-5xl",
						children: "Neha & Akshith"
					})
				})
			]
		})]
	});
}
function Divider() {
	return /* @__PURE__ */ jsx(motion.div, {
		className: "my-12 flex justify-center",
		initial: {
			opacity: 0,
			scaleX: 0
		},
		whileInView: {
			opacity: 1,
			scaleX: 1
		},
		viewport: { once: true },
		transition: { duration: 1.2 },
		children: /* @__PURE__ */ jsx("img", {
			src: divider_default,
			alt: "",
			className: "h-12 w-auto max-w-[80%] opacity-90"
		})
	});
}
function FadeUp({ children, delay = 0 }) {
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			opacity: 0,
			y: 40,
			filter: "blur(6px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: 1,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function EventCard({ title, date, day, time, subtitle }) {
	return /* @__PURE__ */ jsxs(motion.div, {
		className: "glass-card group relative mx-auto max-w-md overflow-hidden rounded-3xl px-8 py-12 text-center",
		initial: {
			opacity: 0,
			rotateY: -12,
			y: 40
		},
		whileInView: {
			opacity: 1,
			rotateY: 0,
			y: 0
		},
		viewport: { once: true },
		transition: {
			duration: 1.2,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		whileHover: {
			rotateX: 4,
			rotateY: -4,
			scale: 1.02
		},
		style: { transformStyle: "preserve-3d" },
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden rounded-3xl",
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-gold-soft/50 to-transparent",
					style: { animation: "shine 4s ease-in-out infinite" }
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-ivory text-gold shadow-[0_0_20px_rgba(200,155,60,0.4)]",
				children: /* @__PURE__ */ jsx(FiCalendar, { className: "h-6 w-6" })
			}),
			subtitle && /* @__PURE__ */ jsx("div", {
				className: "mb-2 font-serif text-sm uppercase tracking-[0.3em] text-gold",
				children: subtitle
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mb-4 font-display text-3xl text-maroon",
				children: title
			}),
			/* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 h-px w-16 bg-gold/60" }),
			/* @__PURE__ */ jsx("div", {
				className: "font-script text-4xl text-gold-gradient",
				children: date
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-2 font-serif text-lg text-maroon/80",
				children: day
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-1 font-serif text-base text-maroon/60",
				children: time
			})
		]
	});
}
function Countdown() {
	const [t, setT] = useState({
		d: 0,
		h: 0,
		m: 0,
		s: 0
	});
	useEffect(() => {
		const tick = () => {
			const diff = Math.max(0, WEDDING_DATE - Date.now());
			setT({
				d: Math.floor(diff / 864e5),
				h: Math.floor(diff / 36e5 % 24),
				m: Math.floor(diff / 6e4 % 60),
				s: Math.floor(diff / 1e3 % 60)
			});
		};
		tick();
		const iv = setInterval(tick, 1e3);
		return () => clearInterval(iv);
	}, []);
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-wrap justify-center gap-6 md:gap-10",
		children: [
			{
				label: "Days",
				val: t.d
			},
			{
				label: "Hours",
				val: t.h
			},
			{
				label: "Minutes",
				val: t.m
			},
			{
				label: "Seconds",
				val: t.s
			}
		].map((it) => /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative flex h-24 w-24 items-center justify-center rounded-full md:h-32 md:w-32",
				children: [/* @__PURE__ */ jsxs("svg", {
					className: "absolute inset-0 -rotate-90",
					viewBox: "0 0 100 100",
					children: [/* @__PURE__ */ jsx("circle", {
						cx: "50",
						cy: "50",
						r: "46",
						fill: "none",
						stroke: "rgba(200,155,60,0.2)",
						strokeWidth: "2"
					}), /* @__PURE__ */ jsx("circle", {
						cx: "50",
						cy: "50",
						r: "46",
						fill: "none",
						stroke: "#c89b3c",
						strokeWidth: "2",
						strokeDasharray: "289",
						strokeDashoffset: 289 - 289 * (it.val / (it.label === "Days" ? 365 : it.label === "Hours" ? 24 : 60)),
						strokeLinecap: "round",
						style: { filter: "drop-shadow(0 0 6px rgba(200,155,60,0.6))" }
					})]
				}), /* @__PURE__ */ jsx("span", {
					className: "font-display text-3xl text-gold-gradient md:text-4xl",
					children: String(it.val).padStart(2, "0")
				})]
			}), /* @__PURE__ */ jsx("span", {
				className: "mt-3 font-serif text-xs uppercase tracking-[0.3em] text-maroon/70",
				children: it.label
			})]
		}, it.label))
	});
}
function RSVP() {
	const [submitted, setSubmitted] = useState(false);
	const [sending, setSending] = useState(false);
	const [error, setError] = useState(null);
	const [ripple, setRipple] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setSending(true);
		const formData = new FormData(e.currentTarget);
		const payload = {
			name: String(formData.get("name") ?? "").trim(),
			phone: String(formData.get("phone") ?? "").trim(),
			guests: Number(formData.get("guests") ?? 1),
			reception: formData.get("reception") === "on",
			wedding: formData.get("wedding") === "on"
		};
		try {
			await sendRsvpEmail({ data: payload });
			setSubmitted(true);
		} catch (submitError) {
			setError(submitError instanceof Error ? submitError.message : "Unable to send RSVP right now.");
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ jsxs("form", {
		className: "glass-card mx-auto max-w-xl space-y-5 rounded-3xl p-8 md:p-10",
		onSubmit: handleSubmit,
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
				className: "mb-1 block font-serif text-sm uppercase tracking-[0.2em] text-gold",
				children: "Name"
			}), /* @__PURE__ */ jsx("input", {
				name: "name",
				required: true,
				className: "w-full rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon outline-none transition focus:border-gold focus:shadow-[0_0_20px_rgba(200,155,60,0.3)]"
			})] }),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
				className: "mb-1 block font-serif text-sm uppercase tracking-[0.2em] text-gold",
				children: "Phone"
			}), /* @__PURE__ */ jsx("input", {
				name: "phone",
				required: true,
				type: "tel",
				className: "w-full rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon outline-none transition focus:border-gold focus:shadow-[0_0_20px_rgba(200,155,60,0.3)]"
			})] }),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
				className: "mb-1 block font-serif text-sm uppercase tracking-[0.2em] text-gold",
				children: "Guests"
			}), /* @__PURE__ */ jsx("input", {
				name: "guests",
				required: true,
				type: "number",
				min: 1,
				defaultValue: 1,
				className: "w-full rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon outline-none transition focus:border-gold focus:shadow-[0_0_20px_rgba(200,155,60,0.3)]"
			})] }),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ jsxs("label", {
					className: "flex items-center gap-3 rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon",
					children: [/* @__PURE__ */ jsx("input", {
						name: "reception",
						type: "checkbox",
						defaultChecked: true,
						className: "h-4 w-4 accent-[#c89b3c]"
					}), "Reception"]
				}), /* @__PURE__ */ jsxs("label", {
					className: "flex items-center gap-3 rounded-lg border border-gold/40 bg-ivory/70 px-4 py-3 font-serif text-maroon",
					children: [/* @__PURE__ */ jsx("input", {
						name: "wedding",
						type: "checkbox",
						defaultChecked: true,
						className: "h-4 w-4 accent-[#c89b3c]"
					}), "Wedding"]
				})]
			}),
			/* @__PURE__ */ jsxs("button", {
				type: "submit",
				disabled: sending,
				onClick: (e) => {
					const r = e.currentTarget.getBoundingClientRect();
					setRipple({
						x: e.clientX - r.left,
						y: e.clientY - r.top
					});
					setTimeout(() => setRipple(null), 700);
				},
				className: "relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#8a6a24] via-[#c89b3c] to-[#f4d98a] px-8 py-4 font-display text-lg text-ivory shadow-[0_10px_30px_-10px_rgba(200,155,60,0.7)] transition hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(200,155,60,0.9)] disabled:cursor-not-allowed disabled:opacity-70",
				children: [submitted ? "Blessing sent" : sending ? "Sending..." : "Send Blessing", ripple && /* @__PURE__ */ jsx("span", {
					className: "pointer-events-none absolute rounded-full bg-white/60",
					style: {
						left: ripple.x,
						top: ripple.y,
						width: 20,
						height: 20,
						transform: "translate(-50%,-50%)",
						animation: "glow-pulse 0.7s ease-out forwards"
					}
				})]
			}),
			error && /* @__PURE__ */ jsx("p", {
				className: "text-center font-serif text-sm text-red-700",
				children: error
			})
		]
	});
}
function Fireworks({ show }) {
	if (!show) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none fixed inset-0 z-50",
		children: [Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsx(motion.div, {
			className: "absolute h-2 w-2 rounded-full",
			initial: {
				left: `${Math.random() * 100}%`,
				top: `${Math.random() * 60 + 10}%`,
				scale: 0,
				opacity: 1
			},
			animate: {
				scale: [
					0,
					8,
					0
				],
				opacity: [
					1,
					1,
					0
				]
			},
			transition: {
				duration: 2,
				delay: i * .3,
				repeat: Infinity,
				repeatDelay: 3
			},
			style: {
				background: i % 2 ? "#c89b3c" : "#f4d98a",
				boxShadow: "0 0 40px 20px rgba(200,155,60,0.6)"
			}
		}, i)), Array.from({ length: 30 }).map((_, i) => /* @__PURE__ */ jsx(motion.span, {
			className: "absolute h-2 w-2",
			style: {
				left: `${Math.random() * 100}%`,
				top: "-5%",
				background: [
					"#c89b3c",
					"#f4d98a",
					"#5a0e1a",
					"#fff9f0"
				][i % 4]
			},
			initial: {
				y: 0,
				rotate: 0,
				opacity: 1
			},
			animate: {
				y: "110vh",
				rotate: 720,
				opacity: 0
			},
			transition: {
				duration: 5,
				delay: Math.random() * 3,
				repeat: Infinity
			}
		}, `c${i}`))]
	});
}
function Invitation() {
	const [intro, setIntro] = useState(true);
	const [reachedEnd, setReachedEnd] = useState(false);
	const { scrollYProgress } = useScroll();
	const progressWidth = useTransform(useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30
	}), (v) => `${v * 100}%`);
	useEffect(() => {
		const onScroll = () => {
			const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
			setReachedEnd(nearBottom);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsx(AnimatePresence, { children: intro && /* @__PURE__ */ jsx(IntroOverlay, { onDone: () => setIntro(false) }) }),
			/* @__PURE__ */ jsx(GoldenCursor, {}),
			/* @__PURE__ */ jsx(GoldenDust, {}),
			/* @__PURE__ */ jsx(Petals, {}),
			/* @__PURE__ */ jsx(Fireworks, { show: reachedEnd }),
			/* @__PURE__ */ jsx(motion.div, {
				className: "fixed left-0 top-0 z-40 h-1 bg-gradient-to-r from-[#8a6a24] via-[#f4d98a] to-[#c89b3c]",
				style: {
					width: progressWidth,
					boxShadow: "0 0 15px rgba(200,155,60,0.8)"
				}
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative flex min-h-screen items-center justify-center px-4 py-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx("p", {
							className: "mb-8 font-serif text-base italic text-maroon/70 md:text-lg",
							children: "With the blessings of elders and the grace of the Almighty"
						}) }),
						/* @__PURE__ */ jsx(motion.img, {
							src: kalash_default,
							alt: "Kalash",
							className: "mx-auto mb-6 h-32 md:h-44",
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1.5,
								delay: .5
							},
							style: { filter: "drop-shadow(0 0 30px rgba(200,155,60,0.5))" }
						}),
						/* @__PURE__ */ jsx(motion.h1, {
							className: "font-script text-6xl leading-tight text-gold-gradient md:text-8xl",
							initial: {
								opacity: 0,
								letterSpacing: "0.3em"
							},
							animate: {
								opacity: 1,
								letterSpacing: "0.02em"
							},
							transition: {
								duration: 2.5,
								delay: 1
							},
							children: "Neha M Devaraj"
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							className: "my-6 flex items-center justify-center gap-4",
							initial: {
								opacity: 0,
								scale: 0
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: 1,
								delay: 1.8
							},
							children: [
								/* @__PURE__ */ jsx("span", { className: "h-px w-16 bg-gold/60 md:w-24" }),
								/* @__PURE__ */ jsx(FiHeart, { className: "h-6 w-6 text-maroon animate-glow-pulse" }),
								/* @__PURE__ */ jsx("span", { className: "h-px w-16 bg-gold/60 md:w-24" })
							]
						}),
						/* @__PURE__ */ jsx(motion.h1, {
							className: "font-script text-6xl leading-tight text-gold-gradient md:text-8xl",
							initial: {
								opacity: 0,
								letterSpacing: "0.3em"
							},
							animate: {
								opacity: 1,
								letterSpacing: "0.02em"
							},
							transition: {
								duration: 2.5,
								delay: 2.2
							},
							children: "Akshith Chandra"
						}),
						/* @__PURE__ */ jsx(FadeUp, {
							delay: 2.5,
							children: /* @__PURE__ */ jsx("p", {
								className: "mt-10 font-serif text-lg italic text-maroon/80 md:text-xl",
								children: "Together with their families invite you to celebrate their wedding."
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex justify-center gap-16",
							children: [/* @__PURE__ */ jsx("img", {
								src: diya_default,
								alt: "",
								className: "h-20 animate-flicker md:h-28",
								loading: "lazy"
							}), /* @__PURE__ */ jsx("img", {
								src: diya_default,
								alt: "",
								className: "h-20 animate-flicker md:h-28",
								style: { animationDelay: "0.4s" },
								loading: "lazy"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "px-4 py-16",
				children: [/* @__PURE__ */ jsxs(FadeUp, { children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-2 text-center font-display text-4xl text-maroon md:text-5xl",
					children: "Celebrations"
				}), /* @__PURE__ */ jsx("p", {
					className: "mb-12 text-center font-serif italic text-maroon/60",
					children: "Two evenings of joy"
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "grid gap-10 md:grid-cols-2 md:gap-8",
					children: [/* @__PURE__ */ jsx(EventCard, {
						subtitle: "Reception",
						title: "An Evening of Joy",
						date: "29 August 2026",
						day: "Saturday",
						time: "7:00 PM onwards"
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute inset-0 -z-10 flex items-center justify-center",
							children: /* @__PURE__ */ jsx("div", {
								className: "h-[110%] w-[110%] rounded-full border border-gold/20 animate-spin-slow",
								style: { background: "radial-gradient(circle, rgba(200,155,60,0.15), transparent 70%)" }
							})
						}), /* @__PURE__ */ jsx(EventCard, {
							subtitle: "Muhurtham",
							title: "Wedding Ceremony",
							date: "30 August 2026",
							day: "Sunday",
							time: "9:30 AM onwards"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsx("section", {
				className: "px-4 py-16",
				children: /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", {
					className: "glass-card mx-auto max-w-3xl rounded-3xl p-8 text-center md:p-14",
					children: [
						/* @__PURE__ */ jsx(motion.div, {
							animate: { y: [
								0,
								-8,
								0
							] },
							transition: {
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-maroon text-gold shadow-[0_0_30px_rgba(200,155,60,0.5)]",
							children: /* @__PURE__ */ jsx(FiMapPin, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mb-2 font-display text-4xl text-maroon",
							children: "Venue"
						}),
						/* @__PURE__ */ jsx("div", { className: "mx-auto my-4 h-px w-20 bg-gold/60" }),
						/* @__PURE__ */ jsx("div", {
							className: "font-script text-4xl text-gold-gradient md:text-5xl",
							children: "NS Palace"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-6 font-serif text-base leading-relaxed text-maroon/80 md:text-lg",
							children: [
								"Magadi Main Rd, Near Indian Oil Petrol Bunk,",
								/* @__PURE__ */ jsx("br", {}),
								"Tavarekere, Channadasipalya,",
								/* @__PURE__ */ jsx("br", {}),
								"Bengaluru, Karnataka 562130"
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "https://maps.google.com/?q=NS+Palace+Magadi+Main+Rd+Tavarekere+Bengaluru",
							target: "_blank",
							rel: "noreferrer",
							className: "mt-8 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gradient-to-r from-[#c89b3c] to-[#f4d98a] px-8 py-3 font-serif text-maroon shadow-[0_10px_30px_-10px_rgba(200,155,60,0.7)] transition hover:scale-105 hover:shadow-[0_0_40px_rgba(200,155,60,0.7)]",
							children: [/* @__PURE__ */ jsx(FiMapPin, {}), " Open in Google Maps"]
						})
					]
				}) })
			}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "px-4 py-16",
				children: [/* @__PURE__ */ jsxs(FadeUp, { children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-2 text-center font-display text-4xl text-maroon md:text-5xl",
					children: "Counting the Moments"
				}), /* @__PURE__ */ jsx("p", {
					className: "mb-12 text-center font-serif italic text-maroon/60",
					children: "Until we say \"yes\""
				})] }), /* @__PURE__ */ jsx(FadeUp, {
					delay: .2,
					children: /* @__PURE__ */ jsx(Countdown, {})
				})]
			}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsx("section", {
				className: "px-4 py-16",
				children: /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ jsx(motion.div, {
						className: "mx-auto mb-6 text-6xl text-gold",
						animate: {
							rotate: [
								0,
								5,
								-5,
								0
							],
							scale: [
								1,
								1.05,
								1
							]
						},
						transition: {
							duration: 6,
							repeat: Infinity
						},
						children: /* @__PURE__ */ jsx(GiLotus, {})
					}), /* @__PURE__ */ jsx("p", {
						className: "font-serif text-xl italic leading-relaxed text-maroon md:text-2xl",
						children: "\"Your gracious presence and blessings will make this auspicious occasion complete and memorable.\""
					})]
				}) })
			}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "px-4 py-16",
				children: [/* @__PURE__ */ jsxs(FadeUp, { children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-2 text-center font-display text-4xl text-maroon md:text-5xl",
					children: "RSVP"
				}), /* @__PURE__ */ jsx("p", {
					className: "mb-12 text-center font-serif italic text-maroon/60",
					children: "Kindly let us know"
				})] }), /* @__PURE__ */ jsx(FadeUp, {
					delay: .2,
					children: /* @__PURE__ */ jsx(RSVP, {})
				})]
			}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsx("section", {
				className: "relative px-4 py-24 text-center",
				children: /* @__PURE__ */ jsxs(FadeUp, { children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-6xl text-gold mb-6",
						children: /* @__PURE__ */ jsx(GiIndianPalace, { className: "mx-auto" })
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-script text-7xl text-gold-gradient md:text-8xl",
						children: "Thank You"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 font-serif text-lg italic text-maroon/80 md:text-xl",
						children: "We look forward to celebrating with you."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 font-script text-3xl text-gold-gradient",
						children: "Neha & Akshith"
					})
				] })
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "pb-12 text-center font-serif text-xs uppercase tracking-[0.3em] text-maroon/40",
				children: "With love · Bengaluru · 2026"
			})
		]
	});
}
//#endregion
export { Invitation as component };
