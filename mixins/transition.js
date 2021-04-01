import { TimelineMax, TweenMax, Power2, Back } from 'gsap'

let curtainsOpenTimeline = () => {
    return new TimelineMax()
        .set('.curtains', { transformOrigin: '0%' })
        .fromTo('.curtains', 0.6, { scaleX: 0 }, { scaleX: 1, ease: Power2.easeInOut })
        .fromTo('.curtains-logo', 0.3, { x: '-100%', autoAlpha: 0 }, { x: '-50%', autoAlpha: 1, ease: Power2.easeInOut }, '-=0.45')
}

let curtainsCloseTimeline = () => {
    return new TimelineMax()
        .set('.curtains', { transformOrigin: '100%' })
        .to('.curtains', 0.6, { scaleX: 0, ease: Power2.easeInOut })
        .fromTo('.curtains-logo', 0.3, { x: '-50%', autoAlpha: 1 }, { x: '0%', autoAlpha: 0, ease: Power2.easeInOut }, '-=0.5')
}

let caseStudyReveal = () => {
    return new TimelineMax()
        .staggerTo('.st', 0.3, { autoAlpha: 1, y: '0%', ease: Back.easeOut.config(3.7) }, 0.05, '-=0.2')
        .fromTo('.project-header-year', 0.3, { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%' }, '-=0.6')
}

let projectsHeroReveal = () => {
    return TweenMax.staggerTo('.st', 0.3, { autoAlpha: 1, y: '0%', ease: Back.easeOut.config(3.7) }, 0.05)
}

let hideStaggers = () => {
    return TweenMax
        .set('.st', { autoAlpha: 0, y: '-18px' })
}

const createTransitionMixin = (leaveTweens = [], enterTweens = []) => {
    return {
        transition: {
            css: false,
            mode: 'out-in',
            leave(el, done) {
                if (!this.$store.state.menuIsAnimating) {
                    let leaveTimeline = new TimelineMax()
                    leaveTweens.forEach(tween => {
                        leaveTimeline.add(tween())
                    })
                    leaveTimeline.eventCallback('onComplete', done)
                } else {
                    done()
                }
            },
            enter(el, done) {
                if (!this.$store.state.menuIsAnimating) {
                    let enterTimeline = new TimelineMax()
                    enterTweens.forEach(tween => {
                        enterTimeline.add(tween())
                    })
                    enterTimeline.eventCallback('onComplete', done)
                } else {
                    done()
                }
            }
        }
    }
}

export let CurtainTransitionBasic = createTransitionMixin(
    [curtainsOpenTimeline], [curtainsCloseTimeline]
)

export let CurtainTransitionCaseStudy = createTransitionMixin(
    [curtainsOpenTimeline], [curtainsCloseTimeline, hideStaggers, caseStudyReveal]
)

export let CurtainTransitionProjectList = createTransitionMixin(
    [curtainsOpenTimeline], [curtainsCloseTimeline, hideStaggers, projectsHeroReveal]
)