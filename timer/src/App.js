import {useState,useEffect} from 'react';


function Timer(){
  let [count, setCount] = useState(10);
  function scroll(){
        window.addEventListener("scroll",function(){
           console.log("scrolling")
        })
      }
 useEffect(()=>{
      scroll()
    let intervalId=setInterval(()=>{
      setCount((prev)=>{if(prev===1){
        clearInterval(intervalId);
        return prev - 1;
      
      }
    return prev-1;
  })
    },1000)
    return () =>{ clearInterval(intervalId)
      window.removeEventListener("scroll", ()=>{console.log("unmount")});
    };
 },[]);
 return  (
  <div>
     <p>

 At the heart of motherhood lies an unparalleled bond forged in the crucible of unconditional love. A mother's love knows no bounds, spanning oceans of joy and valleys of despair with unwavering constancy. It is a love that transcends the boundaries of time and space, encompassing past, present, and future in its eternal embrace.</p>
 <p>
 The nurturing embrace of a mother extends far beyond the physical realm. Like a gardener tending to delicate saplings, she cultivates the fertile soil of her child's mind, nurturing dreams, and aspirations with tender care. With each word of encouragement and gentle touch, she instills the seeds of confidence and resilience, empowering her children to reach for the stars.</p>
 <p>
 Yet, the journey of motherhood is not without its trials and tribulations. From sleepless nights to silent tears shed in the solitude of darkness, mothers bear the weight of the world on their shoulders with quiet dignity. They navigate the turbulent waters of parenthood with grace and fortitude, weathering storms with a steadfast resolve that knows no surrender.</p>
 <p>
 In a world fraught with uncertainty and turmoil, mothers stand as beacons of hope and pillars of strength. They are the silent warriors who fight battles unseen, sacrificing their own needs for the sake of their children's happiness and well-being. Theirs is a labor of love, a sacred duty bestowed upon them by the hand of fate.</p>
 <p>
 Beyond the realm of the individual, the influence of mothers resonates throughout society, shaping the very fabric of our collective consciousness. From the boardroom to the battlefield, the guiding hand of a mother's love leaves an indelible mark on the course of human history, inspiring acts of compassion, courage, and kindness.</p>
 <p>
 As we pause to celebrate the essence of motherhood, let us not forget the countless sacrifices made in the name of love. Let us honor the mothers who have shaped our lives with their wisdom and guidance, whose love has been a beacon of light in our darkest hours. For in the tapestry of life, it is the thread of motherhood that binds us all together in a bond that transcends time and space
 In the end, it is the love of a mother that lights the path ahead, guiding us through the labyrinth of life with unwavering grace and compassion. May we cherish and honor the essence of motherhood, for it is truly the greatest gift we have ever known.</p>
 <p>

At the heart of motherhood lies an unparalleled bond forged in the crucible of unconditional love. A mother's love knows no bounds, spanning oceans of joy and valleys of despair with unwavering constancy. It is a love that transcends the boundaries of time and space, encompassing past, present, and future in its eternal embrace.</p>
<p>
The nurturing embrace of a mother extends far beyond the physical realm. Like a gardener tending to delicate saplings, she cultivates the fertile soil of her child's mind, nurturing dreams, and aspirations with tender care. With each word of encouragement and gentle touch, she instills the seeds of confidence and resilience, empowering her children to reach for the stars.</p>
<p>
Yet, the journey of motherhood is not without its trials and tribulations. From sleepless nights to silent tears shed in the solitude of darkness, mothers bear the weight of the world on their shoulders with quiet dignity. They navigate the turbulent waters of parenthood with grace and fortitude, weathering storms with a steadfast resolve that knows no surrender.</p>
<p>
In a world fraught with uncertainty and turmoil, mothers stand as beacons of hope and pillars of strength. They are the silent warriors who fight battles unseen, sacrificing their own needs for the sake of their children's happiness and well-being. Theirs is a labor of love, a sacred duty bestowed upon them by the hand of fate.</p>
<p>
Beyond the realm of the individual, the influence of mothers resonates throughout society, shaping the very fabric of our collective consciousness. From the boardroom to the battlefield, the guiding hand of a mother's love leaves an indelible mark on the course of human history, inspiring acts of compassion, courage, and kindness.</p>
<p>
As we pause to celebrate the essence of motherhood, let us not forget the countless sacrifices made in the name of love. Let us honor the mothers who have shaped our lives with their wisdom and guidance, whose love has been a beacon of light in our darkest hours. For in the tapestry of life, it is the thread of motherhood that binds us all together in a bond that transcends time and space
In the end, it is the love of a mother that lights the path ahead, guiding us through the labyrinth of life with unwavering grace and compassion. May we cherish and honor the essence of motherhood, for it is truly the greatest gift we have ever known.</p>
<p>

At the heart of motherhood lies an unparalleled bond forged in the crucible of unconditional love. A mother's love knows no bounds, spanning oceans of joy and valleys of despair with unwavering constancy. It is a love that transcends the boundaries of time and space, encompassing past, present, and future in its eternal embrace.</p>
<p>
The nurturing embrace of a mother extends far beyond the physical realm. Like a gardener tending to delicate saplings, she cultivates the fertile soil of her child's mind, nurturing dreams, and aspirations with tender care. With each word of encouragement and gentle touch, she instills the seeds of confidence and resilience, empowering her children to reach for the stars.</p>
<p>
Yet, the journey of motherhood is not without its trials and tribulations. From sleepless nights to silent tears shed in the solitude of darkness, mothers bear the weight of the world on their shoulders with quiet dignity. They navigate the turbulent waters of parenthood with grace and fortitude, weathering storms with a steadfast resolve that knows no surrender.</p>
<p>
In a world fraught with uncertainty and turmoil, mothers stand as beacons of hope and pillars of strength. They are the silent warriors who fight battles unseen, sacrificing their own needs for the sake of their children's happiness and well-being. Theirs is a labor of love, a sacred duty bestowed upon them by the hand of fate.</p>
<p>
Beyond the realm of the individual, the influence of mothers resonates throughout society, shaping the very fabric of our collective consciousness. From the boardroom to the battlefield, the guiding hand of a mother's love leaves an indelible mark on the course of human history, inspiring acts of compassion, courage, and kindness.</p>
<p>
As we pause to celebrate the essence of motherhood, let us not forget the countless sacrifices made in the name of love. Let us honor the mothers who have shaped our lives with their wisdom and guidance, whose love has been a beacon of light in our darkest hours. For in the tapestry of life, it is the thread of motherhood that binds us all together in a bond that transcends time and space
In the end, it is the love of a mother that lights the path ahead, guiding us through the labyrinth of life with unwavering grace and compassion. May we cherish and honor the essence of motherhood, for it is truly the greatest gift we have ever known.</p>
<p>

At the heart of motherhood lies an unparalleled bond forged in the crucible of unconditional love. A mother's love knows no bounds, spanning oceans of joy and valleys of despair with unwavering constancy. It is a love that transcends the boundaries of time and space, encompassing past, present, and future in its eternal embrace.</p>
<p>
The nurturing embrace of a mother extends far beyond the physical realm. Like a gardener tending to delicate saplings, she cultivates the fertile soil of her child's mind, nurturing dreams, and aspirations with tender care. With each word of encouragement and gentle touch, she instills the seeds of confidence and resilience, empowering her children to reach for the stars.</p>
<p>
Yet, the journey of motherhood is not without its trials and tribulations. From sleepless nights to silent tears shed in the solitude of darkness, mothers bear the weight of the world on their shoulders with quiet dignity. They navigate the turbulent waters of parenthood with grace and fortitude, weathering storms with a steadfast resolve that knows no surrender.</p>
<p>
In a world fraught with uncertainty and turmoil, mothers stand as beacons of hope and pillars of strength. They are the silent warriors who fight battles unseen, sacrificing their own needs for the sake of their children's happiness and well-being. Theirs is a labor of love, a sacred duty bestowed upon them by the hand of fate.</p>
<p>
Beyond the realm of the individual, the influence of mothers resonates throughout society, shaping the very fabric of our collective consciousness. From the boardroom to the battlefield, the guiding hand of a mother's love leaves an indelible mark on the course of human history, inspiring acts of compassion, courage, and kindness.</p>
<p>
As we pause to celebrate the essence of motherhood, let us not forget the countless sacrifices made in the name of love. Let us honor the mothers who have shaped our lives with their wisdom and guidance, whose love has been a beacon of light in our darkest hours. For in the tapestry of life, it is the thread of motherhood that binds us all together in a bond that transcends time and space
In the end, it is the love of a mother that lights the path ahead, guiding us through the labyrinth of life with unwavering grace and compassion. May we cherish and honor the essence of motherhood, for it is truly the greatest gift we have ever known.</p>
<p>

At the heart of motherhood lies an unparalleled bond forged in the crucible of unconditional love. A mother's love knows no bounds, spanning oceans of joy and valleys of despair with unwavering constancy. It is a love that transcends the boundaries of time and space, encompassing past, present, and future in its eternal embrace.</p>
<p>
The nurturing embrace of a mother extends far beyond the physical realm. Like a gardener tending to delicate saplings, she cultivates the fertile soil of her child's mind, nurturing dreams, and aspirations with tender care. With each word of encouragement and gentle touch, she instills the seeds of confidence and resilience, empowering her children to reach for the stars.</p>
<p>
Yet, the journey of motherhood is not without its trials and tribulations. From sleepless nights to silent tears shed in the solitude of darkness, mothers bear the weight of the world on their shoulders with quiet dignity. They navigate the turbulent waters of parenthood with grace and fortitude, weathering storms with a steadfast resolve that knows no surrender.</p>
<p>
In a world fraught with uncertainty and turmoil, mothers stand as beacons of hope and pillars of strength. They are the silent warriors who fight battles unseen, sacrificing their own needs for the sake of their children's happiness and well-being. Theirs is a labor of love, a sacred duty bestowed upon them by the hand of fate.</p>
<p>
Beyond the realm of the individual, the influence of mothers resonates throughout society, shaping the very fabric of our collective consciousness. From the boardroom to the battlefield, the guiding hand of a mother's love leaves an indelible mark on the course of human history, inspiring acts of compassion, courage, and kindness.</p>
<p>
As we pause to celebrate the essence of motherhood, let us not forget the countless sacrifices made in the name of love. Let us honor the mothers who have shaped our lives with their wisdom and guidance, whose love has been a beacon of light in our darkest hours. For in the tapestry of life, it is the thread of motherhood that binds us all together in a bond that transcends time and space
In the end, it is the love of a mother that lights the path ahead, guiding us through the labyrinth of life with unwavering grace and compassion. May we cherish and honor the essence of motherhood, for it is truly the greatest gift we have ever known.</p>
<p>

At the heart of motherhood lies an unparalleled bond forged in the crucible of unconditional love. A mother's love knows no bounds, spanning oceans of joy and valleys of despair with unwavering constancy. It is a love that transcends the boundaries of time and space, encompassing past, present, and future in its eternal embrace.</p>
<p>
The nurturing embrace of a mother extends far beyond the physical realm. Like a gardener tending to delicate saplings, she cultivates the fertile soil of her child's mind, nurturing dreams, and aspirations with tender care. With each word of encouragement and gentle touch, she instills the seeds of confidence and resilience, empowering her children to reach for the stars.</p>
<p>
Yet, the journey of motherhood is not without its trials and tribulations. From sleepless nights to silent tears shed in the solitude of darkness, mothers bear the weight of the world on their shoulders with quiet dignity. They navigate the turbulent waters of parenthood with grace and fortitude, weathering storms with a steadfast resolve that knows no surrender.</p>
<p>
In a world fraught with uncertainty and turmoil, mothers stand as beacons of hope and pillars of strength. They are the silent warriors who fight battles unseen, sacrificing their own needs for the sake of their children's happiness and well-being. Theirs is a labor of love, a sacred duty bestowed upon them by the hand of fate.</p>
<p>
Beyond the realm of the individual, the influence of mothers resonates throughout society, shaping the very fabric of our collective consciousness. From the boardroom to the battlefield, the guiding hand of a mother's love leaves an indelible mark on the course of human history, inspiring acts of compassion, courage, and kindness.</p>
<p>
As we pause to celebrate the essence of motherhood, let us not forget the countless sacrifices made in the name of love. Let us honor the mothers who have shaped our lives with their wisdom and guidance, whose love has been a beacon of light in our darkest hours. For in the tapestry of life, it is the thread of motherhood that binds us all together in a bond that transcends time and space
In the end, it is the love of a mother that lights the path ahead, guiding us through the labyrinth of life with unwavering grace and compassion. May we cherish and honor the essence of motherhood, for it is truly the greatest gift we have ever known.</p>
<p>

At the heart of motherhood lies an unparalleled bond forged in the crucible of unconditional love. A mother's love knows no bounds, spanning oceans of joy and valleys of despair with unwavering constancy. It is a love that transcends the boundaries of time and space, encompassing past, present, and future in its eternal embrace.</p>
<p>
The nurturing embrace of a mother extends far beyond the physical realm. Like a gardener tending to delicate saplings, she cultivates the fertile soil of her child's mind, nurturing dreams, and aspirations with tender care. With each word of encouragement and gentle touch, she instills the seeds of confidence and resilience, empowering her children to reach for the stars.</p>
<p>
Yet, the journey of motherhood is not without its trials and tribulations. From sleepless nights to silent tears shed in the solitude of darkness, mothers bear the weight of the world on their shoulders with quiet dignity. They navigate the turbulent waters of parenthood with grace and fortitude, weathering storms with a steadfast resolve that knows no surrender.</p>
<p>
In a world fraught with uncertainty and turmoil, mothers stand as beacons of hope and pillars of strength. They are the silent warriors who fight battles unseen, sacrificing their own needs for the sake of their children's happiness and well-being. Theirs is a labor of love, a sacred duty bestowed upon them by the hand of fate.</p>
<p>
Beyond the realm of the individual, the influence of mothers resonates throughout society, shaping the very fabric of our collective consciousness. From the boardroom to the battlefield, the guiding hand of a mother's love leaves an indelible mark on the course of human history, inspiring acts of compassion, courage, and kindness.</p>
<p>
As we pause to celebrate the essence of motherhood, let us not forget the countless sacrifices made in the name of love. Let us honor the mothers who have shaped our lives with their wisdom and guidance, whose love has been a beacon of light in our darkest hours. For in the tapestry of life, it is the thread of motherhood that binds us all together in a bond that transcends time and space
In the end, it is the love of a mother that lights the path ahead, guiding us through the labyrinth of life with unwavering grace and compassion. May we cherish and honor the essence of motherhood, for it is truly the greatest gift we have ever known.</p>
    <h3>Count: {count}</h3>
  </div>
);
}








