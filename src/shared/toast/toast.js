import React from 'react'
import { style } from './toast-style';
function Toast(props) {

    return (

        <div>

            {
                props.show ?
                    <div style={style.parentDiv}>
                        {
                            props.class == 'success' ?
                                <div className="card" style={style.cardToastSuccess}>
                                    <h4>Success</h4>
                                    <p>{props.message}</p>

                                </div>
                                :
                                <div className="card" style={style.cardToastFail}>
                                    <h4>Error</h4>
                                    <p>{props.message}</p>
                                </div>
                        }


                    </div>
                    : ""
            }
        </div>

    );
}

export default Toast;