interface props {
  video: string;
}

const LazyVideo = (props: props) => {
  return (
    <video controls={true} muted preload="auto">
      <source src={require(`../../${props.video}`)} type="video/mp4" />
    </video>
  );
};

export default LazyVideo;
