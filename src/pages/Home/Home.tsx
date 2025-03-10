import { Carousel, Image } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";
import Chat from "./Chat";
import { useMutation } from "@tanstack/react-query";
import productApi from "../../apis/product.api";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [currentSlide, setCurrentSlide] = useState(1);

  const onChange = (current: number) => {
    if (current === 5) setCurrentSlide(0);
    else setCurrentSlide(current + 1);
  };

  const navigation = useNavigate();

  const dataHotAdv = [
    {
      id: 0,
      title: "Hỗ trợ đa nền tảng",
      content: "Sản phẩm đã có mặt trên iOS, Android và Website",
      img: "/assets/banner1.png",
    },
    {
      id: 1,
      title: "Dễ sử dụng",
      content:
        "Giao diện đơn giản và thân thiện, giúp người dùng tiết kiệm thời gian",
      img: "/assets/banner2.png",
    },
    {
      id: 2,
      title: "Hiệu quả",
      content: "Đem đến giải pháp cho yêu cầu của người dùng",
      img: "/assets/banner3.png",
    },
    {
      id: 3,
      title: "Cá nhân hoá",
      content: "Cho phép tuỳ chỉnh theo mong muốn của người dùng",
      img: "/assets/banner4.png",
    },
    {
      id: 4,
      title: "Cá nhân hoá",
      content: "Cho phép tuỳ chỉnh theo mong muốn của người dùng",
      img: "/assets/banner5.png",
    },
    {
      id: 5,
      title: "Cá nhân hoá",
      content: "Cho phép tuỳ chỉnh theo mong muốn của người dùng",
      img: "/assets/banner5.png",
    },
  ];
  useEffect(() => {
    // const viewProducts = JSON.parse(localStorage.getItem("view_products") || "");
    // // Chuẩn bị body cho API
    // const formData = {
    //   products: viewProducts, // Đưa dữ liệu từ localStorage vào body
    // };
    // // Gọi API và cập nhật state
    // const fetchData = async () => {
    //   try {
    //     const response = await productApi.getHotProducts(formData);
    //     // setDataHotAdv(response.data); // Giả sử API trả về danh sách trong `response.data`
    //   } catch (error) {
    //     console.error("Failed to fetch data", error);
    //   }
    // };
    // fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Trang chủ | Yummy</title>
        <meta name="description" content="Trang chủ" />
      </Helmet>
      <div className="flex flex-col gap-5 py-5 hot">
        <div className=" font-pacifico font-bold text-5xl text-center">
          Sản phẩm nổi bật
        </div>
        <div className="py-4">
          <Carousel
            {...settings}
            swipeToSlide
            draggable
            autoplay
            afterChange={onChange}
          >
            {dataHotAdv.map((item, index) => (
              <div
                className={
                  currentSlide === item.id
                    ? "carousel-item focused"
                    : "carousel-item"
                }
                key={index}
              >
                <Image src={item.img} preview={false} />
              </div>
            ))}
          </Carousel>
        </div>
        <div
          className="font-pacifico text-4xl text-center font-bold text-amber-800 hover:cursor-pointer "
          onClick={() => navigation("/product")}
        >
          Xem thêm
        </div>
      </div>

      <div className="flex flex-col gap-5 py-10 discount">
        <div className="font-pacifico font-bold text-6xl text-center my-5 text-white">
          Khuyến mãi
        </div>
        <div className="flex flex-row items-start gap-6 mx-10 justify-center my-10">
          <div className="bg-white flex flex-col gap-10 rounded-3xl p-5 w-1/2">
            <Image
              src="/assets/banner3.png"
              preview={false}
              height={300}
              style={{ width: "100%", objectFit: "contain" }}
            />
            <div className="font-bold">
              Giảm giá chớp nhoáng, lấy deal hời liền tay
            </div>
            <div>Giảm giá 10% cho hoá đơn từ 100.000</div>
            <div className="text-orange font-bold">Xem thêm</div>
          </div>
          <div className="bg-white flex flex-col gap-10 rounded-3xl p-5 w-1/2">
            <Image
              src="/assets/banner3.png"
              preview={false}
              height={300}
              style={{ width: "100%", objectFit: "contain" }}
            />
            <div className="font-bold">
              Giảm giá chớp nhoáng, lấy deal hời liền tay
            </div>
            <div>Giảm giá 10% cho hoá đơn từ 100.000</div>
            <div className="text-orange font-bold">Xem thêm</div>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
}
