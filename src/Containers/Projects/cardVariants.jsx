const cardVariants = {
    cardVariantsCol1: {
        offscreen: {
            x: -500
            // transition: {
            //     type: "spring",
            //     bounce: 0.2,
            //     duration: 0,
            //     delay: 0
            // }
        },
        onscreen: {
            x: 0,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.7,
                delay: 0.3
            }
        }
    },

    cardVariantsCol2: {
        offscreen: {
            y: +1000
        },
        onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.7,
                delay: 0.3
            }
        }
    },

    cardVariantsCol3: {
        offscreen: {
            x: +500
        },
        onscreen: {
            x: 0,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.7,
                delay: 0.3
            }
        }
    }
};

export default cardVariants;