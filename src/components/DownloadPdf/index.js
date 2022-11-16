import { IconLink } from '@tabler/icons';

const DownloadPdf = () => {
    return(
        <p>Para mayor información…
                  <a href='/' download="./assets/pdf/Optihelp-mayor-informacion.pptx" >
                    <IconLink />
                    PPTX
                  </a>
                </p>
    );
}

export { DownloadPdf }