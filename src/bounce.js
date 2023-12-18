
import { motion } from 'framer-motion';

function AnimatedComponent() {
const variants = {
hidden: { opacity: 0, scale: 0 },
visible: { opacity: 1, scale: 1 },
hover: { scale: 1.2, transition: { duration: 0.5 } }
};
return (
<motion.div
variants={variants}
initial="hidden"
animate="visible"
whileHover="hover"
>
This component animates between three different states!
</motion.div>
);
}
export default AnimatedComponent;