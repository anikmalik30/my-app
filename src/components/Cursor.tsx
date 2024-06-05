"use client";
import React, { useEffect } from 'react'
import { gsap } from 'gsap'

function Cursor() {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')
        const cursorText = document.querySelector('.cursor-text')

        const onMouseMove = (event:any) => {
            const { clientX, clientY } = event;
            gsap.to(cursor, { x: clientX, y: clientY })
        }

  const onMouseEnterLink = (event:any) => {
    const link= event.target;
    if(link.classList.contains('view')) {
        if (cursor) {
            gsap.to(cursor,{scale:4});
        }
        if (cursorText) {
            (cursorText as HTMLElement).style.display = 'block';
            (cursorText as HTMLElement).textContent = 'View';
        }
    }
    else{
        if (cursor) {
            gsap.to(cursor,{scale:4});
        }
    }
}

        const onMouseLeaveLink = () => {
            gsap.to(cursor,{scale:1})
            if (cursorText) {
                (cursorText as HTMLElement).style.display = 'none'
            }
        }

        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link) => {
            link.addEventListener('mouseenter',onMouseEnterLink)
            link.addEventListener('mouseleave',onMouseLeaveLink)
    })
})
    return (
        <div id='custom-cursor' className='custom-cursor'>
            <span className='cursor-text'>View</span>
        </div>
    )
}

export default Cursor