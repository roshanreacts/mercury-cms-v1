const ImageComponent = ({ image1, image2, right }: { image1: string; image2: string, right:boolean }) => {
  return (
    <div className={`relative flex ${right ? 'justify-end': ''}`}>
      <img
        src={image1}
        alt="Image 1"
        className="w-[70%] h-auto"
      />

      <img
        src={image2}
        alt="Image 2"
        className={`absolute top-10 w-[70%] h-auto z-10 ${right ? 'right-0': 'left-0'}}`}
      />
    </div>
  );
}

export default ImageComponent;



