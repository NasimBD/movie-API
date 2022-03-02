const Movie = ({poster_path,original_title, overview, vote_average}) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w1280";

    const colorPicker = (value) => {
        let color;
            switch (true){
                case(value > 8):
                    color = 'green';
                    break;
                
                case(value > 6):
                    color = 'orange';
                    break;

                default:
                    color = 'red';
            }
            return color;
        }

    return ( 
        <>
            <div className="movie">
                <div className="image-wrapper">
                    <img src={IMAGE_URL + poster_path} alt={original_title}/>
                </div>
                <div className="title-wrapper">
                    <h3>{original_title}</h3>
                    <span className={`vote_average ${colorPicker(vote_average)}`}>{vote_average}</span>
                </div>
                <div className="overview">
                    <h3>Overview</h3>
                    <p>{overview}</p>
                </div>
            </div>
        </>
     );
}
 
export default Movie;