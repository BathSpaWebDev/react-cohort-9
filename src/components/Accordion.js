import { useState } from 'react';

function Accordion(props) {

    const [contentIsShowing, setContentIsShowing] = useState(false);

    return (
        <div className="accordion">
            <h3 className="accordion-title" onClick={() => setContentIsShowing(!contentIsShowing)}>{props.title}</h3>
            {
                contentIsShowing ?

                <div className="accordion-content">
                    <h4>Answer</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum repellendus atque accusantium, doloribus porro ducimus iste vero, soluta eaque a hic reprehenderit maiores est dignissimos nisi ad nemo architecto aliquam.
                    </p>
                </div>
                :
                ''
            }
        </div>
    )
}

export default Accordion;