package com.americatv.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.americatv.dao.BroadcastDAO;
import com.americatv.entity.Broadcast;
import com.americatv.entity.User;

@Service
public class BroadcastService {

	@Autowired
	BroadcastDAO broadcastDAO;

	public Optional<Broadcast> findeByUserCd(int userCd) {

		Optional<Broadcast> broadcast = broadcastDAO.findByUserCd(userCd);

		broadcast.ifPresent(selectUser -> {
			System.out.println(selectUser.getBroadcastNm());
		});

		return broadcast;

	}

	// 유저코드를 통해 방송국 정보를 수정할 때 사용
	public boolean updateByUserCd(Broadcast broadcast) {

		Optional<Broadcast> updatebbroadcast = broadcastDAO.findByUserCd(broadcast.getUserCd());

		// update할 방송국 정보가 없는 경우
		if (!updatebbroadcast.isPresent())
			return false;

		updatebbroadcast.ifPresent(selectBroadcast -> {
			//받아온 방송국 이름이 빈문자열이 아닐경우에만 업데이트
			if (!broadcast.getBroadcastNm().isEmpty()) {
				selectBroadcast.setBroadcastNm((broadcast.getBroadcastNm()));
			}
			
			if (!broadcast.getBroadcastMyMessage().isEmpty()) {
				selectBroadcast.setBroadcastMyMessage((broadcast.getBroadcastMyMessage()));
			}
			broadcastDAO.save(selectBroadcast);

		});

		return true;
	}

}
