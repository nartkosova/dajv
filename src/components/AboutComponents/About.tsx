import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const About = () => {
  return (
    <Box>
      
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/57fc/2715/2abfcd0ec95c1b880470b8f0253a64b5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NRZf54-5gLs8z3EcFZQAcI83GbCtOVUTHP66g6BdzA8Eti4c2fEsN31hXgh2eUUfflenL1d7k2w~IoYSqucP3l6UBJrN6SmPqciiy1QsYwhPz4kPYrINZajYwQpbgzh0WVAY2N8ppKS~FvK5P7rqyG-hPhk5jQyZjS3qSKZDhyCPn0CyeyTZVYm3ujPvg5Cch1OfnGrPL01mlklqQGJvckLfz3L62GX791ylhTANV4ZsKmWo54sWYUEPDiXLtST9CGSfCobjkkk014mahL95pmW0yr76MGyp4Duvwj94nsgfO7LRY56YtPusCUxB7kXJIqRpElPh8EkpdEIbz28U2g__")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.80)',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: '600',
              marginBottom: 2,
              maxWidth: '750px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            ÜBER UNS
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '750px',
              mx: 'auto',
              marginTop: 2,
              lineHeight: 1.8,
              color: '#FFFFFF',
            }}
          >
            Der Albanisch-Deutsche Juristenverein e.V. mit Sitz in Frankfurt am Main wurde gegründet, um die juristische Zusammenarbeit zwischen [...] zu fördern und die Interessen der albanischen und deutschen Juristen in beiden Ländern zu vertreten.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: '4rem 1rem' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: 4,
          }}
        >
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {[...Array(6)].map((_, idx) => (
            <Box
              key={idx}
              sx={{
                height: '328px',
                width: { xs: '100%', sm: '30%' },
                backgroundImage:
                  'url(https://s3-alpha-sig.figma.com/img/ad8b/a92c/9e252417e19320a3688d65c4c95a8751?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfeINBu3dY-TvwbTigHC6ZIaK2X0pbBCfjhsnht2n6CzTTVzCBeEKrSWLN03a3kZra0dUUpEMBf302bsw5ufi2RHCe7rqAAh~x8NloLiLRtDwx7cvJLCPAPl4NXeddJWvc7tvGtDSvRt2lPfd3RGpyGbjyf--tfa57vIr51cva4G5M1RNHaiZXPqbuZMkCS6VbqTC1ov9saZv5ygv9u~LQyVu-vxdwvGy2hw0ZqTdglxGRIIoXrUsLOiv9B4u4PbogxW5G20IdVJFyA8mK5jrexwX2p3ENS6fFHSVteYB9CJCmLw22pfKyEyMmWJgbsqczNvp0-nenV507qPXsUstg__)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </Box>
      </Box>

      
      <Box
        sx={{
          position: 'relative',
          height: '50vh',
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/9c30/596e/442e1ba1dce49ebff90b0fcc6b70462c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Os05sKyrR75XQGRZPSQGIuDlTZYPALWA4M12BWPNy0j827sf4pN41bibJgtXOv5EfkufYsau-dPf81MDHr56GG-tYOtRC2anUS5ISZ3MgXuVzvAcgvF3N8sGcViHRbj3--rbYjTbPjNUPeG7OLjeTIjxlByMlLNyRHjtotDQqJhol5wnKFxp8jMBMSsf5EQ1nYBEHb9lWv44FRrnm~vPIdgSaGSGEUXYoVIx6zoyRpI5Zj2RBLFb8RF0zk7Tyg9XzOJ72jhssXgsCGEm7bXJn6WegDsiOO05vU8aPg-~aNimRyHgSQN3s1ohB1YLiNUeEOlkOhiJ2bUYIKAdweacUQ__")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.80)',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '2rem', md: '1.25rem' },
              fontWeight: 500,
              maxWidth: '750px',
              mx: 'auto',
              marginTop: 2,
              lineHeight: { xs: '2.5rem', md: '1.8rem' },
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            Werden Sie Teil unseres Netzwerks und gestalten Sie die Zukunft der albanisch-deutschen juristischen Zusammenarbeit mit!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'main',
              ':hover': { backgroundColor: 'darkred' },
              py: 0.8,
              px: 3,
              borderRadius: '4px',
              fontSize: '0.9rem',
              textTransform: 'none',
              marginTop: 2,
            }}
          >
            Mitglied werden
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
