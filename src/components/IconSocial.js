import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: #0492ac;
`

export default function IconSocial() {
  return (
    <Icons>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1}} 
        >    
            <a href="https://github.com/KATIKAMGAYATHRIREDDY" style={{color:'#0492ac'}}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </motion.div>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1}} 
        >    
            <a href="https://twitter.com/GayathriReddyK5" style={{color:'#0492ac'}}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </motion.div>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1}} 
        >    
            <a href="https://www.linkedin.com/in/katikam-gayathri-reddy-45668b176/" style={{color:'#0492ac'}}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </motion.div>
        <Line color={'red'}
            initial={{ height:0 }}
            animate={{ height: '8rem' }}
            transition={{ type:'spring', duration:1, delay:0.8 }}
        />
    </Icons>
  );
} 