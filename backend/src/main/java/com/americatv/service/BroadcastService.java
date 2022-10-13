package com.americatv.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.americatv.dao.BroadcastDAO;
import com.americatv.entity.Broadcast;

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

}
