import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
type Props = {};
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function OtherUserMessageBox({}: Props) {
  return (
    <div className="otheruser-message-box relative flex h-fit m-2 p-2 justify-start items-start">
      <span className="otheruser-avatar relative block m-2 mt-4">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Sudeep Kumar" src="" className="drop-shadow-lg"></Avatar>
        </StyledBadge>
      </span>
      <div className="other-message relative flex flex-col p-4 m-1 rounded-md bg-white drop-shadow-md max-w-[50%]">
        <span className="admin-user-name relative block text-left">admin</span>
        <span className="admin-message relative block text-lg font-medium text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          facilis vel harum. Reprehenderit non perferendis sit veniam doloribus
          libero blanditiis dolorum consectetur. Ullam illum sit veritatis
          architecto. Consequatur maiores eum fugiat, pariatur veniam iusto!
          Laboriosam eligendi ipsum eaque voluptates temporibus itaque quae
          consectetur deleniti minus facilis reprehenderit libero aliquam
          consequatur voluptatum distinctio, nihil vero reiciendis. At
          cupiditate omnis, tenetur corrupti nihil iste vero eaque quod
          molestias obcaecati voluptatum eos pariatur, voluptates quis
          voluptatem officiis molestiae perferendis magnam earum reiciendis id
          impedit in numquam! Ex quia omnis ducimus quasi, suscipit odit
          sapiente necessitatibus deserunt eum dolorem officiis consequatur nisi
          ad porro. Possimus quo qui amet, a corporis accusantium at quia! Aut,
          quos vel error iusto nisi repellendus rerum dolor quae quia suscipit
          fuga voluptates illum adipisci! Vitae, odio harum eaque rem
          consequatur nisi voluptates dolorem enim error laborum sed, fugiat
          assumenda quam saepe corporis unde libero quasi quibusdam. Omnis vel
          placeat et aperiam cupiditate minus repudiandae sequi molestias
          deserunt, nisi, quam porro maxime laudantium. Expedita hic, nostrum
          recusandae laboriosam molestias, adipisci ut nemo consectetur
          exercitationem tenetur laborum optio officiis. Ullam ducimus
          consequatur id ex dolorem enim perferendis, labore assumenda nulla
          voluptatum consectetur doloremque reiciendis quas rerum sunt, aut
          omnis repellendus at aliquam. Odio, vitae amet. Voluptate quidem
          provident voluptatem amet atque soluta minus debitis corrupti
          accusamus, iste, quis cupiditate deserunt optio! Rerum optio, minus
          veniam error natus non? Repellat unde laboriosam nobis deserunt,
          similique assumenda id beatae accusamus necessitatibus odio fugiat.
          Sit vel perferendis esse asperiores iste! Incidunt eveniet, dicta
          recusandae illum quisquam asperiores voluptatibus ullam labore unde
          blanditiis earum odio iste ducimus beatae explicabo expedita. Fuga vel
          iusto dolores saepe voluptates modi quisquam beatae quis enim,
          mollitia nisi hic, error facilis fugiat natus neque, distinctio nam
          minima quam aut commodi cumque. Repellendus vitae possimus optio
          itaque fuga corrupti dolores et accusantium beatae nihil recusandae
          nisi esse, alias quisquam distinctio facere ducimus molestiae illum
          soluta. Dolores id quam assumenda, animi a tempore vitae itaque
          repellendus non est delectus maxime repudiandae. Voluptatem facere
          fugiat saepe voluptatum. Nostrum porro nemo nulla excepturi? Id
          incidunt quae odit ipsam velit est, ut corrupti dolorum, illo
          voluptate libero nisi expedita beatae dolorem! Voluptatum nam
          veritatis doloribus. Ullam, culpa commodi ducimus mollitia velit
          nobis. Voluptates hic sunt explicabo nihil repellat sit enim, fugiat
          aspernatur rerum. Amet vero ad ratione. Nobis nostrum incidunt a atque
          non, eaque illum, consequuntur quaerat ab odit voluptates error at
          ipsam cum quia, perspiciatis veritatis sed expedita! Ullam adipisci
          accusamus, odio ex perferendis totam veniam quas a placeat delectus
          excepturi voluptate, corrupti rerum aliquid quam possimus sed nemo
          itaque sapiente architecto. Corrupti excepturi modi consequuntur!
          Aliquam natus consectetur cum voluptatum fugit nam impedit explicabo.
          Nam praesentium impedit voluptatem vitae cumque sapiente dolorum,
          maxime dolore aut, nulla, voluptatum repellendus adipisci rem tempore
          libero asperiores saepe. Minima iste quod eum saepe fugiat porro
          placeat dolor maxime dolore. Iure quasi repellendus totam laudantium
          sed maiores facere et vitae aliquid pariatur hic mollitia sint rerum,
          quam sunt nobis. Eos porro expedita fugiat, consequatur obcaecati esse
          cum odio facilis laudantium aliquid quia quasi quam beatae! Asperiores
          nulla est, et rem illum assumenda ratione iure provident. Mollitia,
          culpa. Sint, iure quo earum eveniet temporibus veniam minima magni
          necessitatibus libero quis laudantium quia ex voluptas distinctio?
          Beatae doloremque exercitationem quasi adipisci odio praesentium
          recusandae cumque doloribus illo magnam?
        </span>
        <span className="admin-user-time relative block text-right text-[0.8rem]">
          18:00 PM
        </span>
        <span className="seen-status relative block text-right text-[0.8rem]">seen</span>
      </div>
    </div>
  );
}
