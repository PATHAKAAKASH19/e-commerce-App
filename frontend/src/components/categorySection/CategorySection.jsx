import React, { useCallback , useRef, useState, useEffect} from "react";
import Button from "../ui/button/Button";
import Container from "../ui/container/Container";
import { Card } from "../ui/card/Card";
import Title from "../ui/title/Title";
import createSlug from "../../utils/createSlug";
import Spinner from "../ui/spinner/Spinner";

export default function CategorySection({
  images=[],
  filterType,
  title,
  reactIcon,
 
}) {
  const filterImage = useCallback(
    (image) => {
      if (filterType === "trending") {
        return image.trending;
      } else if (filterType === "bottomwear") {
        return (
          !image.trending &&
          image.subCategory === "bottomwear" &&
          image.category !== "banner" &&
          image.category !== "banner2"
        );
      } else if (filterType === "topwear") {
        return (
          !image.trending &&
          image.subCategory === "topwear" &&
          image.category !== "banner" &&
          image.category !== "banner2"
        );
      } else {
        return false;
      }
    },
    [filterType]
  );


  const imgRef = useRef()

  const [isVisible, setIsVisible] = useState(false)


  useEffect(() => {
     
   const observer = new IntersectionObserver(([entry]) => {
     
    if(entry.isIntersecting){
      setIsVisible(true)
      observer.disconnect()
    }
   }, 
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }
   )


    if(imgRef.current){
      observer.observe(imgRef.current)
    }


 
  }, [])
 

  return (
    <div className="section" ref={imgRef}>
     {
      isVisible?(
        <>
        <Title className="category" reactIcon={reactIcon} title={title} />
        <Container className="categoryImage">
          {images.filter(filterImage).map((image) => (
            <Card
              key={`${image._id}`}
              image={image}
              route={`collections/${createSlug(image.category)}`}
            />
          ))}
        </Container>
        <Button
          title="view all"
          className="button"
          route={`/collections/${filterType}`}
        ></Button>
        </>
      ):(<Spinner></Spinner>)
     }
    </div>
  );
}
