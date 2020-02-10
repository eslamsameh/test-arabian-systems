import styled from 'styled-components';

export const Card = styled.div`
${'' /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */}
border: 0px !important;
border-radius: 0px !important;
border-bottom: 1px solid #dae0e5 !important;
.title{
    color: #000;
    font-size: 15px;
    margin: 0px 20px;
}

.card-content{
    display: flex;
    padding: 20px;
   
    .fa-square-o{
        font-size: 20px;
        cursor: pointer;
        color: #0062cc;
    }
    .fa-square-c{
        font-size: 17px;
        color: #0062cc;
        cursor: pointer;
    }
}


}

`