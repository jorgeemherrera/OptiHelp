import { IconLink } from '@tabler/icons';

const DownloadPdf = () => {
    return(
        <p>Para mayor información…
                  <a href='https://docs.google.com/presentation/d/1ukrvgpbeznMP3eVj0eKwH4WGq2zG3CTn/edit?usp=share_link&ouid=100274034297964109111&rtpof=true&sd=true'  rel="noopener noreferrer" target="_blank">
                    <IconLink />
                    PPTX
                  </a>
                </p>
    );
}

export { DownloadPdf }