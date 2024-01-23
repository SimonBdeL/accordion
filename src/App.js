import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Our chairs are assembled in our manufacturing facility located in [Location]. We ensure high-quality craftsmanship and attention to detail in every step of the assembly process.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "You have a [Number] days return policy starting from the date of delivery. Please make sure the chair is in its original condition with all packaging materials intact for a hassle-free return.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Yes, we offer worldwide shipping. However, shipping costs and delivery times may vary depending on the destination. Feel free to contact our customer support for specific details regarding shipping to your country.",
  },
  {
    title: "What materials are used in making the chairs?",
    text: "Our chairs are crafted using high-quality [Material 1] and [Material 2]. These materials are chosen for their durability, sustainability, and comfort to ensure a premium seating experience.",
  },
  {
    title: "Are the chairs environmentally friendly?",
    text: "We prioritize environmental sustainability in our manufacturing processes. Our chairs are made using eco-friendly materials, and we implement eco-conscious practices to minimize our carbon footprint.",
  },
  {
    title: "Can I customize the color of my chair?",
    text: "Absolutely! We offer customization options for chair colors to match your preferences. Please check our website or contact our customer service to explore the available color choices.",
  },
  {
    title: "What is the weight capacity of your chairs?",
    text: "Our chairs are designed to accommodate a weight capacity of [Weight Capacity] pounds/kilograms. This ensures sturdiness and durability for various body types.",
  },
  {
    title: "Do your chairs come with a warranty?",
    text: "Yes, we offer a [Number]-year warranty on all our chairs. This warranty covers manufacturing defects and ensures your satisfaction with our products.",
  },
  {
    title: "Are assembly instructions provided with the chairs?",
    text: "Certainly! Each chair comes with detailed assembly instructions to make the setup process easy and convenient for our customers.",
  },
  {
    title: "Do you offer bulk purchasing or discounts for businesses?",
    text: "Absolutely, we have special packages and discounts available for bulk orders or businesses. Contact our sales team to discuss your specific requirements and get a personalized quote.",
  },
  {
    title: "What is your return policy if I'm not satisfied with the chair?",
    text: "We strive for customer satisfaction. If you're not completely satisfied with your purchase, you can return the chair within [Number] days for a full refund, excluding shipping costs. Please refer to our return policy for more details.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <Item
          curOpen={curOpen}
          onOpen={setCurOpen}
          number={i + 1}
          title={item.title}
          key={item.title}
        >
          {item.text}
        </Item>
      ))}
      <Item
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test"
        number={23}
        key="test1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>something</li>
          <li>something</li>
          <li>something</li>
        </ul>
      </Item>
    </div>
  );
}
function Item({ number, title, curOpen, onOpen, children }) {
  const isOpen = number === curOpen;
  return (
    <div
      className={isOpen ? "item open" : "item"}
      onClick={() => onOpen(isOpen ? null : number)}
    >
      <div className="number">{String(number).padStart(2, "0")}</div>
      <div className={isOpen ? "title text" : "title"}>{title}</div>
      <div className="icon">{isOpen ? "-" : "+"}</div>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
