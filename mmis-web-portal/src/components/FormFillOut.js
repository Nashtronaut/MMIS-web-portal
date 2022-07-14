const FormFillOut = (props) => {
    const value = props.value;

    switch (value) {
        case '':
            return;

        case 0:
            return (
                <p>0</p>
            );

        case 1:
            return (
                <p>1</p>
            );

        case 2:
            return (
                <p>2</p>
            );

        case 3:
            return (
                <p>3</p>
            );

        case 4:
            return (
                <p>4</p>
            );

        case 5:
            return (
                <p>5</p>
            );

        case 6:
            return (
                <p>6</p>
            );
    }
}

export default FormFillOut;