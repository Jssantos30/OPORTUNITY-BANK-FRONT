import Link from 'next/link'
import SectionTitle from './SectionTitle'

const Section = ({
  section_title,
  title,
  title_src,
  image_url,
  button,
  url_button,
  side_left,
  color,
  children,
  strong_title,
  text_title,
  color_title,
  height,
}) => {
  return (
    <section
      className={`${color} ${
        height == 'md' ? 'md:h-md' : 'md:h-lg'
      }  flex items-center py-8 md:py-0`}
    >
      <div className="main-wrapper px-4">
        {section_title && (
          <SectionTitle color_title={color_title}>
            <strong>{strong_title} </strong>
            {text_title}
          </SectionTitle>
        )}
        <div
          className={`main-wrapper flex flex-col-reverse items-center md:justify-between h-full md:flex-row ${
            side_left && 'md:flex-row-reverse'
          }`}
        >
          <div className="md:w-1/2">
            <div className="flex flex-col w-11/12 mx-auto text-base md:text-lg">
              {title_src ? (
                <div>
                  <img src={title_src} alt="title" className="mb-10" />
                </div>
              ) : (
                <h2 className="text-4xl font-semibold mb-5 leading-10">{title}</h2>
              )}
              {children}
              {button && (
                <Link href={url_button}>
                  <a className="bg-color_primary_2_ligth w-4/5 mx-auto rounded-full p-4 my-10 text-center text-white font-semibold px-8 md:w-36 md:mx-0">
                    {button}
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-center mb-4 md:mb-0 md:w-1/2" style={{height: '510px'}}>
            <img src={image_url} alt="img-section" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
