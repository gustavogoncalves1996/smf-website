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
import { ModalType } from "../../App";
import {
  area1,
  area2,
  area3,
  area4,
  area5,
  area6,
  area7,
  area8,
  area9,
  area10,
  area11,
  area12,
  area13,
  area14,
  area15,
  area16,
  area17,
  area18,
  area19,
} from "./helpers";

interface Props {
  language: string;
  setModal: (modal: ModalType) => void;
}

const getImageStyle = (src: string): React.CSSProperties => ({
  backgroundImage: `url("${src}")`,
});

export const ActivitiesComponent: React.FunctionComponent<Props> = ({
  language,
  setModal,
}) => {
  const onClickActivity = (title: string, text: string[]) => {
    setModal({
      open: true,
      title,
      text,
    });
  };

  return (
    <Container id="practice_areas">
      <LeftArea>
        <Title>{getTranslation("practice_areas_title", language)}</Title>
        <Subtitle>
          {getTranslation("practice_areas_subtitle", language)}
        </Subtitle>
      </LeftArea>
      <ActivitiesArea>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_1", area1)}
        >
          <Image
            style={getImageStyle(
              "https://golookup-live.s3.amazonaws.com/articles/P2fZyHqYBgZGMa3MBjAMg1fm31v52wfUF0whIps9.jpeg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_1", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_2", area2)}
        >
          <Image
            style={getImageStyle(
              "https://www.orfonline.org/wp-content/uploads/2020/06/International-law-and-public-health-crises-1280x720.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_2", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_3", area3)}
        >
          <Image
            style={getImageStyle(
              "https://c4.wallpaperflare.com/wallpaper/655/629/97/business-document-contract-signing-wallpaper-preview.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_3", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_4", area4)}
        >
          <Image
            style={getImageStyle(
              "https://www.coronellylam.com/wp-content/uploads/2015/11/Propiedad-intelectual.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_4", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_5", area5)}
        >
          <Image
            style={getImageStyle(
              "https://media.glassdoor.com/l/01/2e/63/1a/our-people-working-to-realise-our-vision.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_5", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_6", area6)}
        >
          <Image
            style={getImageStyle("https://wallpapercave.com/wp/wp2446260.jpg")}
          />
          <ActivityText>
            {getTranslation("practice_areas_6", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_7", area7)}
        >
          <Image
            style={getImageStyle(
              "https://static8.depositphotos.com/1258191/1065/i/600/depositphotos_10654338-stock-photo-two-businessmen-shaking-hands.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_7", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_8", area8)}
        >
          <Image
            style={getImageStyle(
              "https://apicms.thestar.com.my/uploads/images/2020/03/27/622024.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_8", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_9", area9)}
        >
          <Image
            style={getImageStyle(
              "https://images.unsplash.com/photo-1569073120512-05362a6b92e7?ixid=mxwxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhw%3d&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_9", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_10", area10)}
        >
          <Image
            style={getImageStyle(
              "https://wallpaperaccess.com/full/1393720.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_10", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_11", area11)}
        >
          <Image
            style={getImageStyle(
              "https://images.unsplash.com/photo-1590930180621-fc7027a21559?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_11", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_12", area12)}
        >
          <Image
            style={getImageStyle(
              "https://st.depositphotos.com/1071909/1827/i/600/depositphotos_18270545-stock-photo-house.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_12", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_13", area13)}
        >
          <Image
            style={getImageStyle(
              "https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_13", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_14", area14)}
        >
          <Image
            style={getImageStyle("https://wallpaperaccess.com/full/624111.jpg")}
          />
          <ActivityText>
            {getTranslation("practice_areas_14", language)}
          </ActivityText>
        </Activity>

        <Activity
          onClick={(): void => onClickActivity("practice_areas_15", area15)}
        >
          <Image
            style={getImageStyle(
              "https://i3csolucoes.com.br/wp-content/uploads/2019/04/Vendas-em-shopping-centers-cresceram-86-em-agosto.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_15", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_16", area16)}
        >
          <Image
            style={getImageStyle(
              "https://www.smartstateindia.com/wp-content/uploads/2020/08/cyber-scurity.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_16", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_17", area17)}
        >
          <Image
            style={getImageStyle(
              "https://cdn.website.thryv.com/faa0eee0c5534d9d846db0d296d04e93/dms3rep/multi/imperial+-+notary.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_17", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_18", area18)}
        >
          <Image
            style={getImageStyle(
              "https://strutlegal.com/wp-content/uploads/2017/08/judge-courtroom-ghk.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_18", language)}
          </ActivityText>
        </Activity>
        <Activity
          onClick={(): void => onClickActivity("practice_areas_19", area19)}
          style={{ width: "100% !important" }}
        >
          <Image
            style={getImageStyle(
              "https://www.aguiarbranco.pt/Archive/Images/Normal/n525867773881.jpg"
            )}
          />
          <ActivityText>
            {getTranslation("practice_areas_19", language)}
          </ActivityText>
        </Activity>
      </ActivitiesArea>
    </Container>
  );
};
