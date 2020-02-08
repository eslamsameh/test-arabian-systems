import styled from 'styled-components';

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
.title{
    color: #000;
}
.card-content{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    .fa-toggle-on{
        font-size: 25px;
        color: #0062cc;
        cursor: pointer;
    }
    .fa-toggle-off{
        font-size: 25px;
        cursor: pointer;
        color: #818589
    }
}

}

`