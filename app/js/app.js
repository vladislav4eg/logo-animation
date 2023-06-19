gsap.registerPlugin(ScrollTrigger);

gsap.set("#logoSmallCircle", {opacity: 0, scale: 0, transformOrigin: "50% 50%"});

const logoTl = gsap.timeline()
	.to("#logo", { scale: 0.5})
	.to("#logoCircle", {scale: 2.8, opacity: 0.9, duration: 4, ease:"sine.out", fillOpacity: 1, transformOrigin: "50% 50%"}, '<')
	.to("#logoSmallCircle", {scale: 2.5, opacity: 0.8, delay: 1, duration: 2, ease:"sine.out"})
	.to("#circleLine", {opacity: 1, strokeOpacity: 1, ease:"sine.out"})
	.to("#logoSmallCircle", {rotate: 720, duration: 10,  ease:"sine.out"})
	.to("#logoNine", {opacity: 1, duration: 4, delay: 4, ease:"sine.out"}, '<')

	ScrollTrigger.create({
  animation: logoTl, 
  trigger: ".logo__wrap",
  start: "0% 15%",
	end: "100%+=" + logoTl.duration() * 10 + "0%",
  scrub: true, 
	pin: '.logo__wrap',
	markers: true,
});


