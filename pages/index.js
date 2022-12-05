import Link from 'next/link'
import Head from 'next/head'
import * as React from 'react'
import { servicesItem } from '../utils/servicesItem'
import { requirementsItem } from '../utils/requirementsItem'
import { benefitsItem } from '../utils/benefitsItem'
import { carrouselItem } from '../utils/CarrouselItem'
import Section from '../components/Section'
import CarrouselSection from '../components/CarrouselSection'

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="version" content="1.0.23" />
      </Head>

      <section className="flex md:h-sm flex-col md:flex-row pb-8 sm:pb-0">
        <div className='w-full h-52 md:h-full relative containerImage' />
        {/* <img
          src="/home-banner.png"
          alt="img-capital-semilla"
          className="w-full h-52 md:h-full relative imageHomeBanner"
        /> */}
        <div className="flex w-4/5 justify-center static md:absolute pb-4 pt-16 items-center md:right-0 md:w-1/2 h-sm mx-auto">
          <div className="text-white flex flex-col items-center justify-around h-96 w-11/12 md:w-2/3 md:h-64 md:items-start">
            <h1 className="text-4xl font-semibold text-black">
              Cumplir tus sueños nunca fue tan fácil.
            </h1>
            <Link href="/switch">
              <a className="bg-color_primary_2_ligth border-2 border-transparent rounded-full px-4 py-4 my-2 text-lg w-full text-center hover:bg-white hover:text-color_primary_1 hover:border-color_primary_1 font-semibold md:w-64">
                Solicita tu crédito aquí
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-color_primary_2_ligth text-sm flex items-center h-full md:h-36">
        <div className="main-wrapper hide-scrollbar overflow-x-scroll overflow-y-hidden flex-nowrap flex items-center text-white md:justify-between containerServicesItems">
          {servicesItem.map((item, idx) => {
            return (
              <Link href={item.href} key={idx}>
                <a className='service-card'>
                  <div className="flex flex-col py-8 mx-4 h-full font-semibold md:py-0 md:ml-0 w-full">
                    <img src={item.src} alt="img" className="h-10 mb-5" />
                    <p className="text-center mt-0 text-base">{item.title}</p>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </section>

      <CarrouselSection data={carrouselItem} />

      <Section
        image_url={`${process.env.NEXT_BASE_PATH}/ventajas.svg`}
        color="bg-white"
        side_left
        section_title
        strong_title="Ventajas"
        text_title="de nuestros créditos"
      >
        <div className="mx-auto w-full">
          <div className="mx-auto">
            <div className="bg-color_primary_2_ligth text-white rounded flex justify-around p-1 items-center h-32">
              <div className="flex flex-col text-center">
                <p className="text-5xl font-bold">0.91%</p>
                <p>$9.100 por cada millón</p>
              </div>
              <p className="text-center text-xl font-bold w-28">Interés Mensual</p>
            </div>
            {benefitsItem.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex justify-start text-xl font-bold items-center last:text-xs sm:last:h-20 last:h-auto  rounded-lg mt-1 h-20 p-1 "
                >
                  <div className="flex items-center justify-center mx-6 w-20">
                    <img src={item.src} alt="" />
                  </div>
                  <p className="w-8/12">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <section className="bg-color_gray_2 py-14 h-full " id="requisitos-generales">
        <div className="main-wrapper px-4">
          <div className="flex mx-auto mb-12 md:w-full">
            <h2
              className={`text-3xl border-b-2 w-full md:w-1/2  border-color_primary_2_dark`}
            >
              <strong>Requisitos</strong> generales para créditos
            </h2>
            <h2 className="hidden md:block md:border-b md:w-1/2"></h2>
          </div>
          <div className="flex flex-wrap md:px-4 justify-center">
            {requirementsItem.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center box-content w-80 my-4 md:mx-4"
                >
                  <div className="rounded-full -mb-10 z-10 p-3 w-24 h-24">
                    <img src={item.src} alt="img" className="w-full h-full" />
                  </div>
                  <div
                    className={`text-center text-lg font-semibold p-4  ${
                      item.class ? 'md:h-40' : 'md:h-72'
                    } `}
                  >
                    <p className="mt-6">{item.text}</p>
                    {item.id === 6 ? (
                      <span className="text-[12px]">
                        * Si tienes propiedad raíz, no necesitas codeudor*
                      </span>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


    </>
  )
}
