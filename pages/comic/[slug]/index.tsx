import { Comments } from "components/comment";
import { IconEye, IconLike } from "components/icons";
import {
  ComicImage,
  ComicTitle,
  ComicMetaGroup,
  ComicDesc,
  ComicRating,
  ComicEpisodes,
} from "modules/comic";

const ComicDetail = () => {
  return (
    <div className="layout-container">
      <div className="flex gap-x-[50px] pt-[45px]">
        <div className="flex-shrink-0 w-[240px]">
          <ComicImage url="http://st.nettruyenco.com/data/comics/127/toan-chuc-phap-su.jpg" />
        </div>
        <div>
          <ComicTitle className="text-[22px]">Bow to Your Queen</ComicTitle>
          <span>[Cập nhật lúc: 00:05 09/07/2022]</span>
          <div className="my-3 flex items-center gap-6">
            <div className="flex items-center gap-x-1">
              <IconEye className="text-green2d h-4 h-4" />
              <span className="font-semibold">13.3 M</span>
            </div>
            <div className="flex items-center gap-x-1">
              <IconLike className="text-green2d h-4 h-4" />
              <span className="font-semibold">13.3 M</span>
            </div>
          </div>
          <ComicRating />
          <div className="mt-2">
            <span className="font-bold mr-2">Tác giả:</span>
            <span>Toàn Chức Pháp Sư</span>
          </div>
          <ComicMetaGroup label="Tình trạng" content="Đang cập nhật"></ComicMetaGroup>
          <div className="mt-2">
            <span className="font-bold mr-2">Thể loại:</span>
            <span>Romance / CEO / Girl Power / Revenge / Showbiz / Substitute</span>
          </div>
          <div className="mt-2">
            <span className="font-bold mr-2">Lượt theo dõi:</span>
            <span>252.305</span>
          </div>
        </div>
      </div>
      <ComicDesc label="Tóm tắt">
        Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép
        thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du
        đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã
        biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính
        mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như
        nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm
        phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng
        là toàn hệ toàn năng pháp sư!
      </ComicDesc>
      <ComicEpisodes />
      <Comments />
    </div>
  );
};

export default ComicDetail;
