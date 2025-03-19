interface ButtonContent2Props {
  titleBtn?: string;
  linkBtn?: string;
  btnstyle?: string;
  gmbUrl?: boolean;
}

const ButtonContent: React.FC<ButtonContent2Props> = ({
  titleBtn,
  linkBtn,
  btnstyle,
  gmbUrl,
}) => {
  return (
    <div>
      <a
        href={`${linkBtn ? linkBtn : "/contact"} `}
        className="w-[150px] bg-gradient-to-tr from-btnColor to-btnHover h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-primary before:to-[rgb(56,56,56)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
        target={linkBtn && gmbUrl ? "_blank" : "_self"}
        aria-label={titleBtn ? titleBtn : "Contact Us!"}
      >

        <p className="text ml-2 text-white">
          {titleBtn ? titleBtn : "Contact Us!"}
        </p>
      </a>
    </div>
  );
};
export default ButtonContent;
