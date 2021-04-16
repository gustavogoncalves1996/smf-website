import React from "react";

import {
  Container,
  LeftArea,
  Title,
  Subtitle,
  ActivitiesArea,
  Activity,
  Image,
  ActivityText,
} from "./styles";
import { getTranslation } from "../../helpers";

interface Props {
  language: string;
}

const getImageStyle = (src: string): React.CSSProperties => ({
  backgroundImage: `url("${src}")`,
});

export const ActivitiesComponent: React.FunctionComponent<Props> = ({
  language,
}) => {
  return (
    <Container id="practice_areas">
      <LeftArea>
        <Title>{getTranslation("practice_areas_title", language)}</Title>
        <Subtitle>
          {getTranslation("practice_areas_subtitle", language)}
        </Subtitle>
      </LeftArea>
      <ActivitiesArea>
        <Activity>
          <Image
            style={getImageStyle(
              "https://golookup-live.s3.amazonaws.com/articles/P2fZyHqYBgZGMa3MBjAMg1fm31v52wfUF0whIps9.jpeg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_1", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://www.orfonline.org/wp-content/uploads/2020/06/International-law-and-public-health-crises-1280x720.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_2", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://c4.wallpaperflare.com/wallpaper/655/629/97/business-document-contract-signing-wallpaper-preview.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_3", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://www.coronellylam.com/wp-content/uploads/2015/11/Propiedad-intelectual.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_4", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://media.glassdoor.com/l/01/2e/63/1a/our-people-working-to-realise-our-vision.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_5", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle("https://wallpapercave.com/wp/wp2446260.jpg")}
          />
          <ActivityText>
            {getTranslation("practice_areas_6", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://static8.depositphotos.com/1258191/1065/i/600/depositphotos_10654338-stock-photo-two-businessmen-shaking-hands.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_7", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://apicms.thestar.com.my/uploads/images/2020/03/27/622024.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_8", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://images.unsplash.com/photo-1569073120512-05362a6b92e7?ixid=mxwxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhw%3d&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_9", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://wallpaperaccess.com/full/1393720.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_10", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle("https://wallpaperaccess.com/full/624111.jpg")}
          />
          <ActivityText>
            {getTranslation("practice_areas_11", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://www.smartstateindia.com/wp-content/uploads/2020/08/cyber-scurity.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_12", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://cdn.website.thryv.com/faa0eee0c5534d9d846db0d296d04e93/dms3rep/multi/imperial+-+notary.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_13", language)}
          </ActivityText>
        </Activity>
        <Activity>
          <Image
            style={getImageStyle(
              "https://strutlegal.com/wp-content/uploads/2017/08/judge-courtroom-ghk.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_14", language)}
          </ActivityText>
        </Activity>
        <Activity style={{ width: "100% !important" }}>
          <Image
            style={getImageStyle(
              "https://www.aguiarbranco.pt/Archive/Images/Normal/n525867773881.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_15", language)}
          </ActivityText>
        </Activity>
      </ActivitiesArea>
    </Container>
  );
};
