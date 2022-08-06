const Exercise4 = () => {

    const Animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    return (
        <div >
            {Animals.map(items =>
                <ul><li>{items}</li></ul>
            )}
        </div>
    );
};
export default Exercise4;
