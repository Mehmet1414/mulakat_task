import { useState } from "react";
import Buttons from "./Buttons";

const textA =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet beatae praesentium quisquam commodi consequatur consequuntur fugiat, voluptas itaque laudantium, ullam ab nihil modi! Debitis error deleniti consequatur illo veritati";
const textB =
  " Gördüğünüz gibi, Buttons bileşeni artık wrapTextWithTag işlevini de alıyor. Bu işlev, bir düğmeye tıklandığında belirli bir etiket ile seçilen metni sarmalayacak";
const textC =
  "Eğer seçilen alan dışında kalan kısmı koruyarak sadece seçili alanı değiştirmek istiyorsanız, bu durumu ele almak biraz daha karmaşıktır. Aşağıda bu işlevselliği sağlamak için nasıl bir yaklaşım kullanabileceğinizi gösteren bir örnek ";
const Text = () => {
  const [selected, setSelected] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  console.log(selected);

  const handleText = () => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      setSelected(selection.toString());
    }
    setSelectedTag("");
  };

  const wrapTextWithTag = (tagS, tagE) => {
    const wrappedText = `${tagS}${selected}${tagE}`;
    setSelectedTag(wrappedText);
  };
  console.log(selectedTag);

  return (
    <div className="container">
      <Buttons wrapTextWithTag={wrapTextWithTag} />
      <div className="text-container">
        <p onMouseUp={handleText}>
          {selectedTag ? (
            <span
              dangerouslySetInnerHTML={{
                __html: textA.replace(selected, selectedTag),
              }}
            />
          ) : (
            textA
          )}
        </p>
        <h3 onMouseUp={handleText}>
          {selectedTag ? (
            <span
              dangerouslySetInnerHTML={{
                __html: textB.replace(selected, selectedTag),
              }}
            />
          ) : (
            textB
          )}
        </h3>
        <small onMouseUp={handleText}>
          {selectedTag ? (
            <span
              dangerouslySetInnerHTML={{
                __html: textC.replace(selected, selectedTag),
              }}
            />
          ) : (
            textC
          )}
        </small>
      </div>
      <div className="selected-text"></div>
    </div>
  );
};

export default Text;
